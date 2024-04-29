import pg from 'pg';
import assert from 'node:assert';

const omit = (object, ...keys) => Object.fromEntries(Object.entries(object).filter(([key]) => !keys.includes(key)));
const omitArray = (arrayOfObjects, ...keys) => arrayOfObjects.map((value) => omit(value, ...keys));

const schemas = ['cloud', 'public'];
const schemasArray = `(${schemas.map((schema) => `'${schema}'`).join(', ')})`;

const tryCompare = (a, b) => {
  try {
    assert.deepStrictEqual(a, b);
  } catch (error) {
    console.error(error.toString());
    process.exit(1);
  }
};

const queryDatabaseManifest = async (database) => {
  const pool = new pg.Pool({ database, user: 'postgres', password: 'postgres' });

  const { rows: tables } = await pool.query(/* sql */`
    select *
    from information_schema.tables
    where table_schema in ${schemasArray}
    order by table_schema, table_name asc;
  `);

  const { rows: columns } = await pool.query(/* sql */`
    select *
    from information_schema.columns 
    where table_schema in ${schemasArray}
    order by table_schema, table_name, column_name asc;
  `);

  const { rows: enums } = await pool.query(/* sql */`
    select pg_type.typname, pg_enum.enumlabel
    from pg_type 
    join pg_enum 
    on pg_enum.enumtypid = pg_type.oid
    order by pg_type.typname, pg_enum.enumlabel asc;
  `);

  const { rows: constraints } = await pool.query(/* sql */`
    select conrelid::regclass AS table, con.*, pg_get_constraintdef(con.oid)
    from pg_catalog.pg_constraint con
    inner join pg_catalog.pg_class rel
    on rel.oid = con.conrelid
    inner join pg_catalog.pg_namespace nsp
    on nsp.oid = connamespace
    where nsp.nspname = 'public'
    order by conname asc;
  `);

  const { rows: indexes } = await pool.query(/* sql */`
    select *
    from pg_indexes
    where schemaname in ${schemasArray}
    order by schemaname, indexname asc;
  `);

  const { rows: funcs } = await pool.query(/* sql */`
    select n.nspname as schema_name,
      p.proname as specific_name,
      case p.prokind 
        when 'f' then 'FUNCTION'
        when 'p' then 'PROCEDURE'
        when 'a' then 'AGGREGATE'
        when 'w' then 'WINDOW'
        end as kind,
      l.lanname as language,
      case when l.lanname = 'internal' then p.prosrc
        else pg_get_functiondef(p.oid)
        end as definition,
      pg_get_function_arguments(p.oid) as arguments,
      t.typname as return_type
    from pg_proc p
    left join pg_namespace n on p.pronamespace = n.oid
    left join pg_language l on p.prolang = l.oid
    left join pg_type t on t.oid = p.prorettype 
    where n.nspname not in ('pg_catalog', 'information_schema')
    and l.lanname != 'c' -- Filter out c functions since we don't use them
    order by schema_name, specific_name;
  `);

  const { rows: triggers } = await pool.query(/* sql */`select * from information_schema.triggers;`);
  const { rows: policies } = await pool.query(/* sql */`select * from pg_policies order by tablename, policyname;`);
  const { rows: columnGrants } = await pool.query(/* sql */`
    select * from information_schema.role_column_grants
    where table_schema in ${schemasArray}
      and grantee != 'postgres'
    order by table_schema, grantee, table_name, column_name, privilege_type;
  `);
  const { rows: tableGrants } = await pool.query(/* sql */`
    select * from information_schema.role_table_grants
    where table_schema in ${schemasArray}
      and grantee != 'postgres'
    order by table_schema, grantee, table_name, privilege_type;
  `);

  // This function removes the last segment of grantee since Logto will use 'logto_tenant_fresh/alteration' for the role name.
  const normalizeGrantee = ({ grantee, ...rest }) => {
    if (grantee.startsWith('logto_tenant_')) {
      return { ...rest, grantee: 'logto_tenant' };
    }

    return { grantee, ...rest };
  };

  // Ditto.
  const normalizeRoles = ({ roles: raw, ...rest }) => {
    const roles = raw.slice(1, -1).split(',').map((name) => name.startsWith('logto_tenant_') ? 'logto_tenant' : name);

    return { roles, ...rest };
  };

  // Omit generated ids and values
  return {
    tables: omitArray(tables, 'table_catalog'),
    columns: omitArray(columns, 'table_catalog', 'udt_catalog', 'ordinal_position', 'dtd_identifier'),
    enums,
    constraints: omitArray(
      constraints,
      'oid',
      /** 
       * See https://www.postgresql.org/docs/current/catalog-pg-constraint.html, better to use `pg_get_constraintdef()`
       * to extract the definition of check constraint, so this can be omitted since conbin changes with the status of the computing resources.
       */
      'conbin',
      'connamespace',
      'conrelid',
      'contypid',
      'conindid',
      'conparentid',
      'confrelid',
      'conkey',
      'confkey',
      'conpfeqop',
      'conppeqop',
      'conffeqop',
      'confdelsetcols',
      'conexclop',
    ),
    indexes,
    funcs,
    triggers: omitArray(triggers, 'trigger_catalog', 'event_object_catalog'),
    policies: policies.map(normalizeRoles),
    columnGrants: omitArray(columnGrants, 'table_catalog').map(normalizeGrantee),
    tableGrants: omitArray(tableGrants, 'table_catalog').map(normalizeGrantee),
  };
};

const [,, database1, database2] = process.argv;

console.log('Compare database manifest between', database1, 'and', database2);

const manifests = [
  await queryDatabaseManifest(database1),
  await queryDatabaseManifest(database2),
];

tryCompare(...manifests);

const autoCompare = (a, b) => {
  if (typeof a !== typeof b) {
    return (typeof a).localeCompare(typeof b);
  }

  return String(a).localeCompare(String(b));
};

const buildSortByKeys = (keys) => (a, b) => {
  const found = keys.find((key) => a[key] !== b[key]);
  return found ? autoCompare(a[found], b[found]) : 0;
};

const queryDatabaseData = async (database) => {
  const pool = new pg.Pool({ database, user: 'postgres', password: 'postgres' });
  const result = await Promise.all(manifests[0].tables
    .map(async ({ table_schema, table_name }) => {
      const { rows } = await pool.query(/* sql */`select * from ${table_schema}.${table_name};`);

      // check config rows except the value column
      if (['logto_configs', '_logto_configs', 'systems'].includes(table_name)) {
        const data = omitArray(rows, 'value');
        return [table_name, data.sort(buildSortByKeys(Object.keys(data[0] ?? {})))];
      }

      const data = omitArray(
        rows,
        'id',
        'resource_id',
        'role_id',
        'application_id',
        'scope_id',
        'created_at',
        'updated_at',
        'secret',
        'db_user',
        'db_user_password'
      );

      return [table_name, data.sort(buildSortByKeys(Object.keys(data[0] ?? {})))];
    })
  );

  return Object.fromEntries(result);
};

console.log('Compare database data between', database1, 'and', database2);

tryCompare(await queryDatabaseData(database1), await queryDatabaseData(database2));
