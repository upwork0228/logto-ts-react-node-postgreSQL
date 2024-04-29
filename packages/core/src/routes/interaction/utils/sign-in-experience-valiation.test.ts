import type { SignInExperience } from '@logto/schemas';
import { SignInIdentifier, SignInMode, InteractionEvent, MfaFactor } from '@logto/schemas';

import { mockSignInExperience } from '#src/__mocks__/sign-in-experience.js';

import {
  verifySignInModeSettings,
  verifyIdentifierSettings,
  verifyProfileSettings,
  verifyMfaSettings,
} from './sign-in-experience-validation.js';

describe('verifySignInModeSettings', () => {
  it(InteractionEvent.Register, () => {
    expect(() => {
      verifySignInModeSettings(InteractionEvent.Register, {
        signInMode: SignInMode.SignIn,
      } as SignInExperience);
    }).toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.Register, {
        signInMode: SignInMode.Register,
      } as SignInExperience);
    }).not.toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.Register, {
        signInMode: SignInMode.SignInAndRegister,
      } as SignInExperience);
    }).not.toThrow();
  });

  it('SignIn', () => {
    expect(() => {
      verifySignInModeSettings(InteractionEvent.SignIn, {
        signInMode: SignInMode.SignIn,
      } as SignInExperience);
    }).not.toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.SignIn, {
        signInMode: SignInMode.Register,
      } as SignInExperience);
    }).toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.SignIn, {
        signInMode: SignInMode.SignInAndRegister,
      } as SignInExperience);
    }).not.toThrow();
  });

  it(InteractionEvent.ForgotPassword, () => {
    expect(() => {
      verifySignInModeSettings(InteractionEvent.ForgotPassword, {
        signInMode: SignInMode.SignIn,
      } as SignInExperience);
    }).not.toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.ForgotPassword, {
        signInMode: SignInMode.Register,
      } as SignInExperience);
    }).not.toThrow();
    expect(() => {
      verifySignInModeSettings(InteractionEvent.ForgotPassword, {
        signInMode: SignInMode.SignInAndRegister,
      } as SignInExperience);
    }).not.toThrow();
  });
});

describe('identifier validation', () => {
  it('username-password', () => {
    const identifier = { username: 'username', password: 'password' };

    expect(() => {
      verifyIdentifierSettings(identifier, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Username
          ),
        },
      });
    }).toThrow();
  });

  it('email password', () => {
    const identifier = { email: 'email', password: 'password' };

    expect(() => {
      verifyIdentifierSettings(identifier, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Email
          ),
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Email,
              password: false,
              verificationCode: true,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).toThrow();
  });

  it('email verificationCode', () => {
    const identifier = { email: 'email', verificationCode: 'verificationCode' };

    expect(() => {
      verifyIdentifierSettings(identifier, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Email
          ),
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Email,
              password: true,
              verificationCode: false,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signUp: {
          identifiers: [SignInIdentifier.Email],
          password: false,
          verify: true,
        },
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Email,
              password: true,
              verificationCode: false,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).not.toThrow();
  });

  it('phone password', () => {
    const identifier = { phone: '123', password: 'password' };

    expect(() => {
      verifyIdentifierSettings(identifier, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Phone
          ),
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Phone,
              password: false,
              verificationCode: true,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).toThrow();
  });

  it('phone verificationCode', () => {
    const identifier = { phone: '123456', verificationCode: 'verificationCode' };

    expect(() => {
      verifyIdentifierSettings(identifier, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Phone
          ),
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Phone,
              password: true,
              verificationCode: false,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).toThrow();

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signUp: {
          identifiers: [SignInIdentifier.Phone],
          password: false,
          verify: true,
        },
        signIn: {
          methods: [
            {
              identifier: SignInIdentifier.Phone,
              password: true,
              verificationCode: false,
              isPasswordPrimary: true,
            },
          ],
        },
      });
    }).not.toThrow();
  });

  it('connector phone should not throw', () => {
    const identifier = { phone: '123456', connectorId: 'logto' };

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Phone
          ),
        },
      });
    }).not.toThrow();
  });

  it('connector email should not throw', () => {
    const identifier = { email: 'foo@logto.io', connectorId: 'logto' };

    expect(() => {
      verifyIdentifierSettings(identifier, {
        ...mockSignInExperience,
        signIn: {
          methods: mockSignInExperience.signIn.methods.filter(
            ({ identifier }) => identifier !== SignInIdentifier.Email
          ),
        },
      });
    }).not.toThrow();
  });
});

describe('profile validation', () => {
  it('profile sign-in-experience settings verification', () => {
    expect(() => {
      verifyProfileSettings({ username: 'foo', password: 'password' }, mockSignInExperience);
    }).not.toThrow();

    expect(() => {
      verifyProfileSettings({ email: 'email@logto.io' }, mockSignInExperience);
    }).toThrow();

    expect(() => {
      verifyProfileSettings(
        { email: 'email@logto.io' },
        {
          ...mockSignInExperience,
          signUp: { identifiers: [SignInIdentifier.Email], password: false, verify: true },
        }
      );
    }).not.toThrow();

    expect(() => {
      verifyProfileSettings({ phone: '123456' }, mockSignInExperience);
    }).toThrow();

    expect(() => {
      verifyProfileSettings(
        { phone: '123456' },
        {
          ...mockSignInExperience,
          signUp: { identifiers: [SignInIdentifier.Phone], password: false, verify: true },
        }
      );
    }).not.toThrow();

    expect(() => {
      verifyProfileSettings(
        { phone: '123456' },
        {
          ...mockSignInExperience,
          signUp: {
            identifiers: [SignInIdentifier.Phone, SignInIdentifier.Email],
            password: false,
            verify: true,
          },
        }
      );
    }).not.toThrow();

    expect(() => {
      verifyProfileSettings(
        { email: 'email@logto.io' },
        {
          ...mockSignInExperience,
          signUp: {
            identifiers: [SignInIdentifier.Phone, SignInIdentifier.Email],
            password: false,
            verify: true,
          },
        }
      );
    }).not.toThrow();

    expect(() => {
      verifyProfileSettings(
        { username: 'foo' },
        {
          ...mockSignInExperience,
          signUp: {
            identifiers: [SignInIdentifier.Phone, SignInIdentifier.Email],
            password: false,
            verify: true,
          },
        }
      );
    }).toThrow();
  });
});

describe('MFA', () => {
  it('MFA sign-in-experience settings verification', () => {
    expect(() => {
      verifyMfaSettings(MfaFactor.TOTP, {
        ...mockSignInExperience,
        mfa: {
          ...mockSignInExperience.mfa,
          factors: [MfaFactor.TOTP],
        },
      });
    }).not.toThrow();

    expect(() => {
      verifyMfaSettings(MfaFactor.TOTP, {
        ...mockSignInExperience,
        mfa: {
          ...mockSignInExperience.mfa,
          factors: [MfaFactor.WebAuthn],
        },
      });
    }).toThrow();
  });
});
