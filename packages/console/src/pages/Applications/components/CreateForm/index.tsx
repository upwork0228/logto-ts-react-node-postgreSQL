import { type AdminConsoleKey } from '@logto/phrases';
import type { Application } from '@logto/schemas';
import { ApplicationType } from '@logto/schemas';
import { type ReactElement, useMemo } from 'react';
import { useController, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import DynamicT from '@/ds-components/DynamicT';
import FormField from '@/ds-components/FormField';
import ModalLayout from '@/ds-components/ModalLayout';
import RadioGroup, { Radio } from '@/ds-components/RadioGroup';
import TextInput from '@/ds-components/TextInput';
import useApi from '@/hooks/use-api';
import * as modalStyles from '@/scss/modal.module.scss';
import { applicationTypeI18nKey } from '@/types/applications';
import { trySubmitSafe } from '@/utils/form';

import TypeDescription from '../TypeDescription';

import Footer from './Footer';
import * as styles from './index.module.scss';

type FormData = {
  type: ApplicationType;
  name: string;
  description?: string;
  isThirdParty?: boolean;
};

type Props = {
  readonly isDefaultCreateThirdParty?: boolean;
  readonly defaultCreateType?: ApplicationType;
  readonly defaultCreateFrameworkName?: string;
  readonly onClose?: (createdApp?: Application) => void;
};

function CreateForm({
  defaultCreateType,
  defaultCreateFrameworkName,
  isDefaultCreateThirdParty,
  onClose,
}: Props) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { type: defaultCreateType, isThirdParty: isDefaultCreateThirdParty },
  });

  const {
    field: { onChange, value, name, ref },
  } = useController({
    name: 'type',
    control,
    rules: { required: true },
  });

  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const api = useApi();

  const onSubmit = handleSubmit(
    trySubmitSafe(async (data) => {
      if (isSubmitting) {
        return;
      }

      const createdApp = await api.post('api/applications', { json: data }).json<Application>();
      toast.success(t('applications.application_created'));
      onClose?.(createdApp);
    })
  );

  const subtitleElement = useMemo<AdminConsoleKey | ReactElement>(() => {
    if (!defaultCreateFrameworkName) {
      return 'applications.subtitle';
    }

    if (isDefaultCreateThirdParty) {
      return 'applications.create_subtitle_third_party';
    }

    return (
      <DynamicT
        forKey="applications.subtitle_with_app_type"
        interpolation={{ name: defaultCreateFrameworkName }}
      />
    );
  }, [defaultCreateFrameworkName, isDefaultCreateThirdParty]);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen
      className={modalStyles.content}
      overlayClassName={modalStyles.overlay}
      onRequestClose={() => {
        onClose?.();
      }}
    >
      <ModalLayout
        title="applications.create"
        subtitle={subtitleElement}
        size={defaultCreateType ? 'medium' : 'large'}
        footer={
          <Footer
            selectedType={value}
            isLoading={isSubmitting}
            isThirdParty={isDefaultCreateThirdParty}
            onClickCreate={onSubmit}
          />
        }
        onClose={onClose}
      >
        <form>
          {!defaultCreateType && (
            <FormField title="applications.select_application_type">
              <RadioGroup
                ref={ref}
                className={styles.radioGroup}
                name={name}
                value={value}
                type="card"
                onChange={onChange}
              >
                {Object.values(ApplicationType)
                  // Other application types (e.g. "Protected") should not show up in the creation modal
                  .filter((value) =>
                    [
                      ApplicationType.Native,
                      ApplicationType.SPA,
                      ApplicationType.Traditional,
                      ApplicationType.MachineToMachine,
                    ].includes(value)
                  )
                  .map((type) => (
                    <Radio
                      key={type}
                      value={type}
                      hasCheckIconForCard={type !== ApplicationType.MachineToMachine}
                    >
                      <TypeDescription
                        type={type}
                        title={t(`${applicationTypeI18nKey[type]}.title`)}
                        subtitle={t(`${applicationTypeI18nKey[type]}.subtitle`)}
                        description={t(`${applicationTypeI18nKey[type]}.description`)}
                      />
                    </Radio>
                  ))}
              </RadioGroup>
              {errors.type?.type === 'required' && (
                <div className={styles.error}>{t('applications.no_application_type_selected')}</div>
              )}
            </FormField>
          )}
          <FormField isRequired title="applications.application_name">
            <TextInput
              {...register('name', { required: true })}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={!!defaultCreateType}
              placeholder={t('applications.application_name_placeholder')}
              error={Boolean(errors.name)}
            />
          </FormField>
          <FormField title="applications.application_description">
            <TextInput
              {...register('description')}
              placeholder={t('applications.application_description_placeholder')}
            />
          </FormField>
          {defaultCreateType && <input hidden {...register('type')} value={defaultCreateType} />}
        </form>
      </ModalLayout>
    </Modal>
  );
}

export default CreateForm;
