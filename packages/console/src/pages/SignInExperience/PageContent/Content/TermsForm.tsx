import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Card from '@/ds-components/Card';
import FormField from '@/ds-components/FormField';
import TextInput from '@/ds-components/TextInput';
import { uriValidator } from '@/utils/validator';

import type { SignInExperienceForm } from '../../types';
import FormSectionTitle from '../components/FormSectionTitle';

function TermsForm() {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const {
    register,
    formState: { errors },
  } = useFormContext<SignInExperienceForm>();

  return (
    <Card>
      <FormSectionTitle title="content.terms_of_use.title" />
      <FormField title="sign_in_exp.content.terms_of_use.terms_of_use">
        <TextInput
          {...register('termsOfUseUrl', {
            validate: (value) => !value || uriValidator(value) || t('errors.invalid_uri_format'),
          })}
          error={errors.termsOfUseUrl?.message}
          placeholder={t('sign_in_exp.content.terms_of_use.terms_of_use_placeholder')}
        />
      </FormField>
      <FormField title="sign_in_exp.content.terms_of_use.privacy_policy">
        <TextInput
          {...register('privacyPolicyUrl', {
            validate: (value) => !value || uriValidator(value) || t('errors.invalid_uri_format'),
          })}
          error={errors.termsOfUseUrl?.message}
          placeholder={t('sign_in_exp.content.terms_of_use.privacy_policy_placeholder')}
        />
      </FormField>
    </Card>
  );
}

export default TermsForm;
