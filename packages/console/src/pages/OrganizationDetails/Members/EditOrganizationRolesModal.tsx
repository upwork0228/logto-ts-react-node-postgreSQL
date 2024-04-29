import { type UserWithOrganizationRoles } from '@logto/schemas';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';

import OrganizationRolesSelect from '@/components/OrganizationRolesSelect';
import Button from '@/ds-components/Button';
import FormField from '@/ds-components/FormField';
import ModalLayout from '@/ds-components/ModalLayout';
import { type Option } from '@/ds-components/Select/MultiSelect';
import useApi from '@/hooks/use-api';
import * as modalStyles from '@/scss/modal.module.scss';
import { decapitalize } from '@/utils/string';

type Props = {
  readonly organizationId: string;
  readonly user: UserWithOrganizationRoles;
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

function EditOrganizationRolesModal({ organizationId, user, isOpen, onClose }: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const [keyword, setKeyword] = useState('');
  const [roles, setRoles] = useState<Array<Option<string>>>(
    user.organizationRoles.map(({ id, name }) => ({ value: id, title: name }))
  );
  const name = user.name ?? decapitalize(t('organization_details.user'));
  const [isLoading, setIsLoading] = useState(false);
  const api = useApi();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await api.put(`api/organizations/${organizationId}/users/${user.id}/roles`, {
        json: {
          organizationRoleIds: roles.map(({ value }) => value),
        },
      });
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      className={modalStyles.content}
      overlayClassName={modalStyles.overlay}
      onRequestClose={onClose}
    >
      <ModalLayout
        title={
          <>
            {t('organization_details.edit_organization_roles_of_user', {
              name,
            })}
          </>
        }
        subtitle={<>{t('organization_details.authorize_to_roles', { name })}</>}
        footer={
          <Button
            size="large"
            type="primary"
            title="general.save"
            isLoading={isLoading}
            onClick={onSubmit}
          />
        }
        onClose={onClose}
      >
        <FormField title="organizations.organization_role_other">
          <OrganizationRolesSelect
            value={roles}
            keyword={keyword}
            setKeyword={setKeyword}
            onChange={setRoles}
          />
        </FormField>
      </ModalLayout>
    </ReactModal>
  );
}

export default EditOrganizationRolesModal;
