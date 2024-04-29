import { InteractionEvent, SignInIdentifier } from '@logto/schemas';
import { assert } from '@silverhand/essentials';
import { act, fireEvent, waitFor } from '@testing-library/react';

import renderWithPageContext from '@/__mocks__/RenderWithPageContext';
import { putInteraction, sendVerificationCode } from '@/apis/interaction';
import { UserFlow, type VerificationCodeIdentifier } from '@/types';

import ForgotPasswordForm from '.';

const mockedNavigate = jest.fn();

jest.mock('i18next', () => ({
  language: 'en',
  t: (key: string) => key,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

jest.mock('@/apis/interaction', () => ({
  sendVerificationCode: jest.fn(() => ({ success: true })),
  putInteraction: jest.fn(() => ({ success: true })),
}));

describe('ForgotPasswordForm', () => {
  const email = 'foo@logto.io';
  const countryCode = '86';
  const phone = '13911111111';

  const renderForm = (defaultType: VerificationCodeIdentifier, defaultValue?: string) =>
    renderWithPageContext(
      <ForgotPasswordForm
        enabledTypes={[SignInIdentifier.Email, SignInIdentifier.Phone]}
        defaultType={defaultType}
        defaultValue={defaultValue}
      />
    );

  describe.each([
    { identifier: SignInIdentifier.Email, value: email },
    { identifier: SignInIdentifier.Phone, value: `${countryCode}${phone}` },
  ] satisfies Array<{ identifier: VerificationCodeIdentifier; value: string }>)(
    'identifier: %s, value: %s',
    ({ identifier, value }) => {
      test(`forgot password form render properly with default ${identifier} value ${value}`, async () => {
        const { container, queryByText } = renderForm(identifier, value);
        const identifierInput = container.querySelector(`input[name="identifier"]`);

        assert(identifierInput, new Error('identifier input should not be null'));
        expect(queryByText('action.continue')).not.toBeNull();

        if (identifier === SignInIdentifier.Email) {
          expect(identifierInput.getAttribute('value')).toBe(value);
        }

        if (identifier === SignInIdentifier.Phone) {
          expect(identifierInput.getAttribute('value')).toBe(phone);
        }
      });

      test(`send ${identifier} verification code properly`, async () => {
        const { container, getByText } = renderForm(identifier, value);
        const identifierInput = container.querySelector(`input[name="identifier"]`);

        assert(identifierInput, new Error('identifier input should not be null'));

        const submitButton = getByText('action.continue');

        act(() => {
          fireEvent.click(submitButton);
        });

        await waitFor(() => {
          expect(putInteraction).toBeCalledWith(InteractionEvent.ForgotPassword);
          expect(sendVerificationCode).toBeCalledWith({ email });
          expect(mockedNavigate).toBeCalledWith(
            {
              pathname: `/${UserFlow.ForgotPassword}/verification-code`,
              search: '',
            },
            { state: { identifier, value }, replace: undefined }
          );
        });
      });
    }
  );
});
