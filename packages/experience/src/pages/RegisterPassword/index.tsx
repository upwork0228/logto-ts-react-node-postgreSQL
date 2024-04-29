import { SignInIdentifier } from '@logto/schemas';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SecondaryPageLayout from '@/Layout/SecondaryPageLayout';
import { setUserPassword } from '@/apis/interaction';
import SetPassword from '@/containers/SetPassword';
import { useConfirmModal } from '@/hooks/use-confirm-modal';
import { type ErrorHandlers } from '@/hooks/use-error-handler';
import useMfaErrorHandler from '@/hooks/use-mfa-error-handler';
import usePasswordAction, { type SuccessHandler } from '@/hooks/use-password-action';
import { usePasswordPolicy, useSieMethods } from '@/hooks/use-sie';

import ErrorPage from '../ErrorPage';

const RegisterPassword = () => {
  const { signUpMethods } = useSieMethods();

  const navigate = useNavigate();
  const { show } = useConfirmModal();
  const [errorMessage, setErrorMessage] = useState<string>();
  const clearErrorMessage = useCallback(() => {
    setErrorMessage(undefined);
  }, []);

  const mfaErrorHandler = useMfaErrorHandler({ replace: true });

  const errorHandlers: ErrorHandlers = useMemo(
    () => ({
      // Incase previous page submitted username has been taken
      'user.username_already_in_use': async (error) => {
        await show({ type: 'alert', ModalContent: error.message, cancelText: 'action.got_it' });
        navigate(-1);
      },
      ...mfaErrorHandler,
    }),
    [navigate, mfaErrorHandler, show]
  );

  const successHandler: SuccessHandler<typeof setUserPassword> = useCallback((result) => {
    if (result && 'redirectTo' in result) {
      window.location.replace(result.redirectTo);
    }
  }, []);

  const [action] = usePasswordAction({
    api: setUserPassword,
    setErrorMessage,
    errorHandlers,
    successHandler,
  });

  const {
    policy: {
      length: { min, max },
      characterTypes: { min: count },
    },
    requirementsDescription,
  } = usePasswordPolicy();

  if (!signUpMethods.includes(SignInIdentifier.Username)) {
    return <ErrorPage />;
  }

  return (
    <SecondaryPageLayout
      title="description.new_password"
      description={requirementsDescription && <span>{requirementsDescription}</span>}
      descriptionProps={{ min, count }}
    >
      <SetPassword
        autoFocus
        errorMessage={errorMessage}
        maxLength={max}
        clearErrorMessage={clearErrorMessage}
        onSubmit={action}
      />
    </SecondaryPageLayout>
  );
};

export default RegisterPassword;
