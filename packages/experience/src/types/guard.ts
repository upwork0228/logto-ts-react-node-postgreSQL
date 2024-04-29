import {
  SignInIdentifier,
  MissingProfile,
  MfaFactor,
  type SsoConnectorMetadata,
} from '@logto/schemas';
import * as s from 'superstruct';

import { UserFlow } from '.';

export const userFlowGuard = s.enums([
  UserFlow.SignIn,
  UserFlow.Register,
  UserFlow.ForgotPassword,
  UserFlow.Continue,
]);

/* Password SignIn Flow */
export const passwordIdentifierStateGuard = s.object({
  identifier: s.enums([SignInIdentifier.Email, SignInIdentifier.Phone, SignInIdentifier.Username]),
  value: s.string(),
});

/* Verification Code Flow Guard */
const verificationCodeMethodGuard = s.union([
  s.literal(SignInIdentifier.Email),
  s.literal(SignInIdentifier.Phone),
]);
export const verificationCodeStateGuard = s.object({
  identifier: verificationCodeMethodGuard,
  value: s.string(),
});

/* Social Flow Guard */
const registeredSocialIdentity = s.optional(
  s.object({
    email: s.optional(s.string()),
    phone: s.optional(s.string()),
  })
);

export const missingProfileErrorDataGuard = s.object({
  missingProfile: s.array(
    s.union([
      s.literal(MissingProfile.password),
      s.literal(MissingProfile.email),
      s.literal(MissingProfile.phone),
      s.literal(MissingProfile.username),
      s.literal(MissingProfile.emailOrPhone),
    ])
  ),
  registeredSocialIdentity,
});

export const registeredSocialIdentityStateGuard = s.type({
  registeredSocialIdentity,
});

export const socialAccountNotExistErrorDataGuard = s.object({
  relatedUser: s.object({
    type: s.union([s.literal('email'), s.literal('phone')]),
    value: s.string(),
  }),
});

export type SocialRelatedUserInfo = s.Infer<
  typeof socialAccountNotExistErrorDataGuard
>['relatedUser'];

/* Mfa */
const mfaFactorsGuard = s.array(
  s.union([
    s.literal(MfaFactor.TOTP),
    s.literal(MfaFactor.WebAuthn),
    s.literal(MfaFactor.BackupCode),
  ])
);

export const mfaErrorDataGuard = s.object({
  availableFactors: mfaFactorsGuard,
  skippable: s.optional(s.boolean()),
});

export const mfaFlowStateGuard = mfaErrorDataGuard;

export type MfaFlowState = s.Infer<typeof mfaFlowStateGuard>;

export const totpBindingStateGuard = s.assign(
  s.object({
    secret: s.string(),
    secretQrCode: s.string(),
  }),
  mfaFlowStateGuard
);

export type TotpBindingState = s.Infer<typeof totpBindingStateGuard>;

export const backupCodeErrorDataGuard = s.object({
  codes: s.array(s.string()),
});

export const backupCodeBindingStateGuard = backupCodeErrorDataGuard;

export type BackupCodeBindingState = s.Infer<typeof backupCodeBindingStateGuard>;

export const webAuthnStateGuard = s.assign(
  s.object({
    options: s.record(s.string(), s.unknown()),
  }),
  mfaFlowStateGuard
);

export type WebAuthnState = s.Infer<typeof webAuthnStateGuard>;

/* Single Sign On */
export const ssoConnectorMetadataGuard: s.Describe<SsoConnectorMetadata> = s.object({
  id: s.string(),
  logo: s.string(),
  darkLogo: s.optional(s.string()),
  connectorName: s.string(),
});
