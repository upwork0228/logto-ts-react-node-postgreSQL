import { type OrganizationWithRoles } from '@logto/schemas';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
import useSWR from 'swr';

import OrganizationIcon from '@/assets/icons/organization-preview.svg';
import Tip from '@/assets/icons/tip.svg';
import EmptyDataPlaceholder from '@/components/EmptyDataPlaceholder';
import ItemPreview from '@/components/ItemPreview';
import { RoleOption } from '@/components/OrganizationRolesSelect';
import ThemedIcon from '@/components/ThemedIcon';
import CopyToClipboard from '@/ds-components/CopyToClipboard';
import IconButton from '@/ds-components/IconButton';
import Search from '@/ds-components/Search';
import Table from '@/ds-components/Table';
import Tag from '@/ds-components/Tag';
import { ToggleTip } from '@/ds-components/Tip';
import { type RequestError } from '@/hooks/use-api';
import useTenantPathname from '@/hooks/use-tenant-pathname';
import { buildUrl } from '@/utils/url';

import { type UserDetailsOutletContext } from '../types';

import * as styles from './index.module.scss';

function UserOrganizations() {
  const [keyword, setKeyword] = useState('');
  const {
    user: { id },
  } = useOutletContext<UserDetailsOutletContext>();
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { getPathname } = useTenantPathname();

  // Since this API has no pagination (to align with ID token claims):
  // - We don't need to use the `page` state.
  // - We can perform frontend filtering.
  const { data: rawData, error } = useSWR<OrganizationWithRoles[], RequestError>(
    buildUrl(`api/users/${id}/organizations`, { showFeatured: '1' })
  );
  const isLoading = !rawData && !error;
  const data = rawData?.filter(({ name }) => name.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <Table
      isLoading={isLoading}
      rowIndexKey="id"
      rowGroups={[{ key: 'data', data }]}
      placeholder={<EmptyDataPlaceholder />}
      columns={[
        {
          title: t('general.name'),
          dataIndex: 'name',
          render: ({ name, id }) => (
            <ItemPreview
              title={name}
              icon={<ThemedIcon for={OrganizationIcon} />}
              to={getPathname(`/organizations/${id}`)}
            />
          ),
        },
        {
          title: t('organizations.organization_id'),
          dataIndex: 'id',
          render: ({ id }) => <CopyToClipboard value={id} variant="text" />,
        },
        {
          title: (
            <div className={styles.rolesHeader}>
              {t('organizations.organization_role_other')}
              <ToggleTip
                content={t('user_details.organization_roles_tooltip')}
                horizontalAlign="start"
              >
                <IconButton size="small">
                  <Tip />
                </IconButton>
              </ToggleTip>
            </div>
          ),
          dataIndex: 'roles',
          render: ({ organizationRoles }) => (
            <div className={styles.roles}>
              {organizationRoles.map(({ id, name }) => (
                <Tag key={id} variant="cell">
                  <RoleOption value={id} title={name} />
                </Tag>
              ))}
            </div>
          ),
        },
      ]}
      filter={
        <Search
          defaultValue={keyword}
          isClearable={Boolean(keyword)}
          placeholder={t('organization_details.search_user_placeholder')}
          onSearch={setKeyword}
          onClearSearch={() => {
            setKeyword('');
          }}
        />
      }
    />
  );
}

export default UserOrganizations;
