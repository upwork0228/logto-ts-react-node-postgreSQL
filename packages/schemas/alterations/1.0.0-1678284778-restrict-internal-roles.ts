import { sql } from '@silverhand/slonik';

import type { AlterationScript } from '../lib/types/alteration.js';

const alteration: AlterationScript = {
  up: async (pool) => {
    await pool.query(sql`
      update roles
      set name = '#internal:admin', description = 'Internal admin role for Logto tenant ' || tenant_id || '.'
      where name = 'admin'
      and tenant_id != 'admin';

      update roles
      set description = 'Admin tenant admin role for Logto tenant ' || substring(name from 0 for strpos(name, ':admin')) || '.'
      where name like '%:admin'
      and tenant_id = 'admin';

      -- Restrict direct role modification
      create policy roles_select on roles
        for select using (true);

      drop policy roles_modification on roles;
      create policy roles_modification on roles
        using (not starts_with(name, '#internal:'));

      -- Restrict role - scope modification
      create policy roles_scopes_select on roles_scopes
        for select using (true);

      drop policy roles_scopes_modification on roles_scopes;
      create policy roles_scopes_modification on roles_scopes
        using (not starts_with((select roles.name from roles where roles.id = role_id), '#internal:'));
    `);
  },
  down: async (pool) => {
    await pool.query(sql`
      update roles
      set name = 'admin', description = 'Admin role for Logto.'
      where name = '#internal:admin'
      and tenant_id != 'admin';

      update roles
      set description = 'Admin role for Logto.'
      where name like '%:admin'
      and tenant_id = 'admin';

      drop policy roles_select on roles;
      drop policy roles_modification on roles;

      create policy roles_modification on roles
        using (true);

      drop policy roles_scopes_select on roles_scopes;
      drop policy roles_scopes_modification on roles_scopes;

      create policy roles_scopes_modification on roles_scopes
        using (true);
    `);
  },
};

export default alteration;
