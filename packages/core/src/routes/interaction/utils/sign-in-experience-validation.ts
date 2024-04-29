import type { SignInExperience, Profile, IdentifierPayload, MfaFactor } from '@logto/schemas';
import { SignInMode, SignInIdentifier, InteractionEvent } from '@logto/schemas';

import RequestError from '#src/errors/RequestError/index.js';
import assertThat from '#src/utils/assert-that.js';

const forbiddenEventError = () => new RequestError({ code: 'auth.forbidden', status: 403 });

const forbiddenIdentifierError = () =>
  new RequestError({
    code: 'user.sign_in_method_not_enabled',
    status: 422,
  });

export const verifySignInModeSettings = (
  event: InteractionEvent,
  { signInMode }: SignInExperience
) => {
  if (event === InteractionEvent.SignIn) {
    assertThat(signInMode !== SignInMode.Register, forbiddenEventError());
  }

  if (event === InteractionEvent.Register) {
    assertThat(signInMode !== SignInMode.SignIn, forbiddenEventError());
  }
};

export const verifyIdentifierSettings = (
  identifier: IdentifierPayload,
  signInExperience: SignInExperience
) => {
  const { signIn, signUp } = signInExperience;

  // Username Password Identifier
  if ('username' in identifier) {
    assertThat(
      signIn.methods.some(
        ({ identifier: method, password }) => method === SignInIdentifier.Username && password
      ),
      forbiddenIdentifierError()
    );

    return;
  }

  // Social Identifier  TODO: @darcy, @sijie
  // should not verify connector related identifier here
  if ('connectorId' in identifier) {
    return;
  }

  // Email Identifier
  if ('email' in identifier) {
    assertThat(
      signIn.methods.some(({ identifier: method, password, verificationCode }) => {
        if (method !== SignInIdentifier.Email) {
          return false;
        }

        // Email Password Verification
        if ('password' in identifier && !password) {
          return false;
        }

        // Email verificationCode Verification: SignIn verificationCode enabled or SignUp Email verify enabled
        if (
          'verificationCode' in identifier &&
          !verificationCode &&
          !signUp.identifiers.includes(SignInIdentifier.Email) &&
          !signUp.verify
        ) {
          return false;
        }

        return true;
      }),
      forbiddenIdentifierError()
    );

    return;
  }

  // Phone Identifier
  if ('phone' in identifier) {
    assertThat(
      signIn.methods.some(({ identifier: method, password, verificationCode }) => {
        if (method !== SignInIdentifier.Phone) {
          return false;
        }

        // Phone Password Verification
        if ('password' in identifier && !password) {
          return false;
        }

        // Phone verificationCode Verification: SignIn verificationCode enabled or SignUp Phone verify enabled
        if (
          'verificationCode' in identifier &&
          !verificationCode &&
          !signUp.identifiers.includes(SignInIdentifier.Phone) &&
          !signUp.verify
        ) {
          return false;
        }

        return true;
      }),
      forbiddenIdentifierError()
    );
  }
};

export const verifyProfileSettings = (profile: Profile, { signUp }: SignInExperience) => {
  if (profile.phone) {
    assertThat(signUp.identifiers.includes(SignInIdentifier.Phone), forbiddenIdentifierError());
  }

  if (profile.email) {
    assertThat(signUp.identifiers.includes(SignInIdentifier.Email), forbiddenIdentifierError());
  }

  if (profile.username) {
    assertThat(signUp.identifiers.includes(SignInIdentifier.Username), forbiddenIdentifierError());
  }

  if (profile.password) {
    assertThat(signUp.password, forbiddenIdentifierError());
  }
};

export const verifyMfaSettings = (type: MfaFactor, signInExperience: SignInExperience) => {
  const {
    mfa: { factors },
  } = signInExperience;

  assertThat(factors.includes(type), forbiddenIdentifierError());
};
