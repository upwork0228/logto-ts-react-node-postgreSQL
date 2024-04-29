import { type SchemaLike, type GeneratedSchema } from '@logto/schemas';
import { generateStandardId } from '@logto/shared';
import { type DeepPartial, isPlainObject } from '@silverhand/essentials';
import camelcase from 'camelcase';
import deepmerge from 'deepmerge';
import { type MiddlewareType } from 'koa';
import Router, { type IRouterParamContext } from 'koa-router';
import { z } from 'zod';

import { type SearchOptions } from '#src/database/utils.js';
import koaGuard from '#src/middleware/koa-guard.js';
import koaPagination from '#src/middleware/koa-pagination.js';

import { type TwoRelationsQueries } from './RelationQueries.js';
import type SchemaQueries from './SchemaQueries.js';
import { parseSearchOptions } from './search.js';

const defaultConfig = Object.freeze({
  disabled: {
    get: false,
    post: false,
    getById: false,
    patchById: false,
    deleteById: false,
  },
  searchFields: [],
});

/**
 * Generate the pathname for from a table name.
 *
 * @example
 * ```ts
 * tableToPathname('organization_role') // => 'organization-role'
 * ```
 */
export const tableToPathname = (tableName: string) => tableName.replaceAll('_', '-');

/**
 * Generate the camel case schema ID column name.
 *
 * @example
 * ```ts
 * camelCaseSchemaId({ tableSingular: 'organization' as const }) // => 'organizationId'
 * ```
 *
 */
const camelCaseSchemaId = <T extends { tableSingular: Table }, Table extends string>(schema: T) =>
  `${camelcase(schema.tableSingular)}Id` as const;

type SchemaRouterConfig<Key extends string> = {
  /** Disable certain routes for the router. */
  disabled: {
    /** Disable `GET /` route. */
    get: boolean;
    /** Disable `POST /` route. */
    post: boolean;
    /** Disable `GET /:id` route. */
    getById: boolean;
    /** Disable `PATCH /:id` route. */
    patchById: boolean;
    /** Disable `DELETE /:id` route. */
    deleteById: boolean;
  };
  /** Middlewares that are used before creating API routes */
  middlewares?: MiddlewareType[];
  /** A custom error handler for the router before throwing the error. */
  errorHandler?: (error: unknown) => void;
  /** The fields that can be searched for the `GET /` route. */
  searchFields: SearchOptions<Key>['fields'];
  /**
   * The length of the ID generated by `generateStandardId()`.
   *
   * @see {@link generateStandardId} for the default length.
   */
  idLength?: number;
  /**
   * The guard for the entity returned by the following routes:
   *
   * - `GET /:id`
   * - `POST /`
   * - `PATCH /:id`
   *
   * If not provided, the `schema.guard` will be used.
   */
  entityGuard?: z.ZodTypeAny;
};

type RelationRoutesConfig = {
  /** Disable certain routes for the relation. */
  disabled: {
    /** Disable `GET /:id/[pathname]` route. */
    get: boolean;
  };
};

/**
 * A standard RESTful router for a schema.
 *
 * It provides the following routes by configuring the `actions`:
 *
 * - `GET /`: Get a list of entities.
 * - `POST /`: Create an entity.
 * - `GET /:id`: Get an entity by ID.
 * - `PATCH /:id`: Update an entity by ID.
 * - `DELETE /:id`: Delete an entity by ID.
 *
 * Browse the source code for more details about request/response validation.
 */
export default class SchemaRouter<
  Key extends string,
  CreateSchema extends Partial<SchemaLike<Key> & { id: string }>,
  Schema extends SchemaLike<Key> & { id: string },
  StateT = unknown,
  CustomT extends IRouterParamContext = IRouterParamContext,
> extends Router<StateT, CustomT> {
  public readonly config: SchemaRouterConfig<Key>;

  constructor(
    public readonly schema: GeneratedSchema<Key, CreateSchema, Schema>,
    public readonly queries: SchemaQueries<Key, CreateSchema, Schema>,
    config: DeepPartial<SchemaRouterConfig<Key>> = {}
  ) {
    super({ prefix: '/' + tableToPathname(schema.table) });

    this.config = deepmerge(defaultConfig, config, { isMergeableObject: isPlainObject });

    if (this.config.middlewares?.length) {
      this.use(...this.config.middlewares);
    }

    if (this.config.errorHandler) {
      this.use(async (_, next) => {
        try {
          await next();
        } catch (error: unknown) {
          this.config.errorHandler?.(error);
          throw error;
        }
      });
    }

    this.#addRoutes();
  }

  /**
   * Add routes for relations between the current schema and another schema.
   *
   * The routes are:
   *
   * - `GET /:id/[pathname]`: Get the entities of the relation with pagination.
   * - `POST /:id/[pathname]`: Add entities to the relation.
   * - `DELETE /:id/[pathname]/:relationSchemaId`: Remove an entity from the relation set.
   * The `:relationSchemaId` is the entity ID in the relation schema.
   *
   * The `[pathname]` is determined by the `pathname` parameter.
   *
   * @remarks
   * The `POST /:id/[pathname]` route accepts a JSON body with the following format:
   *
   * ```json
   * { "[relationSchemaIds]": ["id1", "id2", "id3"] }
   * ```
   *
   * The `[relationSchemaIds]` is the camel case of the relation schema's table name in
   * singular form with `Ids` suffix. For example, if the relation schema's table name is
   * `organization_roles`, the `[relationSchemaIds]` will be `organizationRoleIds`.
   *
   * @param relationQueries The queries class for the relation.
   * @param pathname The pathname of the relation. If not provided, it will be
   * the camel case of the relation schema's table name.
   * @see {@link TwoRelationsQueries} for the `relationQueries` configuration.
   */
  addRelationRoutes<
    RelationCreateSchema extends Partial<SchemaLike<string> & { id: string }>,
    RelationSchema extends SchemaLike<string> & { id: string },
  >(
    relationQueries: TwoRelationsQueries<
      typeof this.schema,
      GeneratedSchema<string, RelationCreateSchema, RelationSchema>
    >,
    pathname = tableToPathname(relationQueries.schemas[1].table),
    { disabled }: Partial<RelationRoutesConfig> = {}
  ) {
    const relationSchema = relationQueries.schemas[1];
    const relationSchemaId = camelCaseSchemaId(relationSchema);
    const columns = {
      schemaId: camelCaseSchemaId(this.schema),
      relationSchemaId,
      relationSchemaIds: relationSchemaId + 's',
    };

    if (!disabled?.get) {
      this.get(
        `/:id/${pathname}`,
        koaPagination(),
        koaGuard({
          params: z.object({ id: z.string().min(1) }),
          response: relationSchema.guard.array(),
          status: [200, 404],
        }),
        async (ctx, next) => {
          const { id } = ctx.guard.params;

          // Ensure that the main entry exists
          await this.queries.findById(id);

          const [totalCount, entities] = await relationQueries.getEntities(
            relationSchema,
            {
              [columns.schemaId]: id,
            },
            ctx.pagination
          );

          ctx.pagination.totalCount = totalCount;
          ctx.body = entities;
          return next();
        }
      );
    }

    this.post(
      `/:id/${pathname}`,
      koaGuard({
        params: z.object({ id: z.string().min(1) }),
        body: z.object({ [columns.relationSchemaIds]: z.string().min(1).array().nonempty() }),
        status: [201, 422],
      }),
      async (ctx, next) => {
        const {
          params: { id },
          body: { [columns.relationSchemaIds]: relationIds },
        } = ctx.guard;

        await relationQueries.insert(
          ...(relationIds?.map<[string, string]>((relationId) => [id, relationId]) ?? [])
        );

        ctx.status = 201;
        return next();
      }
    );

    this.put(
      `/:id/${pathname}`,
      koaGuard({
        params: z.object({ id: z.string().min(1) }),
        body: z.object({ [columns.relationSchemaIds]: z.string().min(1).array() }),
        status: [204, 422],
      }),
      async (ctx, next) => {
        const {
          params: { id },
          body: { [columns.relationSchemaIds]: relationIds },
        } = ctx.guard;

        await relationQueries.replace(id, relationIds ?? []);
        ctx.status = 204;
        return next();
      }
    );

    this.delete(
      `/:id/${pathname}/:${camelCaseSchemaId(relationSchema)}`,
      koaGuard({
        params: z.object({ id: z.string().min(1), [relationSchemaId]: z.string().min(1) }),
        status: [204, 422],
      }),
      async (ctx, next) => {
        const {
          params: { id, [relationSchemaId]: relationId },
        } = ctx.guard;

        await relationQueries.delete({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- `koaGuard()` ensures the value is not `undefined`
          [columns.schemaId]: id!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- `koaGuard()` ensures the value is not `undefined`
          [columns.relationSchemaId]: relationId!,
        });

        ctx.status = 204;
        return next();
      }
    );
  }

  #addRoutes() {
    const { queries, schema, config } = this;
    const { disabled, searchFields, idLength, entityGuard } = config;

    if (!disabled.get) {
      this.get(
        '/',
        koaPagination(),
        koaGuard({
          query: z.object({ q: z.string().optional() }),
          response: (entityGuard ?? schema.guard).array(),
          status: [200],
        }),
        async (ctx, next) => {
          const search = parseSearchOptions(searchFields, ctx.guard.query);
          const { limit, offset } = ctx.pagination;
          const [count, entities] = await queries.findAll(limit, offset, search);

          ctx.pagination.totalCount = count;
          ctx.body = entities;
          return next();
        }
      );
    }

    if (!disabled.post) {
      this.post(
        '/',
        koaGuard({
          body: schema.createGuard.omit({ id: true }),
          response: entityGuard ?? schema.guard,
          status: [201], // TODO: 409/422 for conflict?
        }),
        async (ctx, next) => {
          // eslint-disable-next-line no-restricted-syntax -- `.omit()` doesn't play well with generics
          ctx.body = await queries.insert({
            id: generateStandardId(idLength),
            ...ctx.guard.body,
          } as CreateSchema);
          ctx.status = 201;
          return next();
        }
      );
    }

    if (!disabled.getById) {
      this.get(
        '/:id',
        koaGuard({
          params: z.object({ id: z.string().min(1) }),
          response: entityGuard ?? schema.guard,
          status: [200, 404],
        }),
        async (ctx, next) => {
          ctx.body = await queries.findById(ctx.guard.params.id);
          return next();
        }
      );
    }

    if (!disabled.patchById) {
      this.patch(
        '/:id',
        koaGuard({
          params: z.object({ id: z.string().min(1) }),
          body: schema.updateGuard,
          response: entityGuard ?? schema.guard,
          status: [200, 404], // TODO: 409/422 for conflict?
        }),
        async (ctx, next) => {
          ctx.body = await queries.updateById(ctx.guard.params.id, ctx.guard.body);
          return next();
        }
      );
    }

    if (!disabled.deleteById) {
      this.delete(
        '/:id',
        koaGuard({
          params: z.object({ id: z.string().min(1) }),
          status: [204, 404],
        }),
        async (ctx, next) => {
          await queries.deleteById(ctx.guard.params.id);
          ctx.status = 204;
          return next();
        }
      );
    }
  }
}