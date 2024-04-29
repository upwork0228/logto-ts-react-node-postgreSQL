import type { MiddlewareType } from 'koa';
import type { IMiddleware } from 'koa-router';
import { number } from 'zod';

import RequestError from '#src/errors/RequestError/index.js';
import { buildLink } from '#src/utils/pagination.js';

type Pagination = {
  offset: number;
  limit: number;
  totalCount?: number;
  disabled?: boolean;
};

export type WithPaginationContext<ContextT> = ContextT & {
  pagination: Pagination;
};

type PaginationConfig = {
  defaultPageSize?: number;
  maxPageSize?: number;
  isOptional?: boolean;
};

export const isPaginationMiddleware = <Type extends IMiddleware>(
  function_: Type
): function_ is WithPaginationContext<Type> => function_.name === 'paginationMiddleware';

export const fallbackDefaultPageSize = 20;
export const pageNumberKey = 'page';
export const pageSizeKey = 'page_size';

export default function koaPagination<StateT, ContextT, ResponseBodyT>({
  defaultPageSize = fallbackDefaultPageSize,
  maxPageSize = 100,
  isOptional = false,
}: PaginationConfig = {}): MiddlewareType<StateT, WithPaginationContext<ContextT>, ResponseBodyT> {
  // Name this anonymous function for the utility function `isPaginationMiddleware` to identify it
  const paginationMiddleware: MiddlewareType<
    StateT,
    WithPaginationContext<ContextT>,
    ResponseBodyT
  > = async (ctx, next) => {
    try {
      const {
        request: {
          query: { [pageNumberKey]: rawPageNumber, [pageSizeKey]: rawPageSize },
        },
      } = ctx;
      // If isOptional is set to true, user can disable pagination by
      // set both `page` and `page_size` to empty
      const disabled = !rawPageNumber && !rawPageSize && isOptional;
      // Query values are all string, need to convert to number first.
      const pageNumber = rawPageNumber ? number().positive().parse(Number(rawPageNumber)) : 1;
      const pageSize = rawPageSize
        ? number().positive().max(maxPageSize).parse(Number(rawPageSize))
        : defaultPageSize;

      ctx.pagination = { offset: (pageNumber - 1) * pageSize, limit: pageSize, disabled };
    } catch {
      throw new RequestError({ code: 'guard.invalid_pagination', status: 400 });
    }

    await next();

    if (ctx.pagination.disabled) {
      return;
    }

    // Total count value should be returned, else return internal server-error.
    if (ctx.pagination.totalCount === undefined) {
      throw new Error('missing totalCount');
    }

    const { limit, offset, totalCount } = ctx.pagination;
    const totalPage = Math.ceil(totalCount / limit) || 1; // Minimum page number is 1

    // Our custom response header: Total-Number
    ctx.set('Total-Number', String(totalCount));

    // Response header's `Link`: https://datatracker.ietf.org/doc/html/rfc5988
    const page = Math.floor(offset / limit) + 1; // Start from 1
    ctx.append('Link', buildLink(ctx.request, 1, 'first'));
    ctx.append('Link', buildLink(ctx.request, totalPage, 'last'));

    if (page > 1) {
      ctx.append('Link', buildLink(ctx.request, page - 1, 'prev'));
    }

    if (page < totalPage) {
      ctx.append('Link', buildLink(ctx.request, page + 1, 'next'));
    }
  };

  return paginationMiddleware;
}
