import type { SignInExperience } from '@logto/schemas';
import { SignInMode, SignInIdentifier, MfaFactor, MfaPolicy } from '@logto/schemas';

import { updateSignInExperience } from '#src/api/index.js';

export const defaultSignUpMethod = {
  identifiers: [],
  password: false,
  verify: false,
};

const defaultPasswordSignInMethods = [
  {
    identifier: SignInIdentifier.Username,
    password: true,
    verificationCode: false,
    isPasswordPrimary: false,
  },
  {
    identifier: SignInIdentifier.Email,
    password: true,
    verificationCode: false,
    isPasswordPrimary: false,
  },
  {
    identifier: SignInIdentifier.Phone,
    password: true,
    verificationCode: false,
    isPasswordPrimary: false,
  },
];

const defaultVerificationCodeSignInMethods = [
  {
    identifier: SignInIdentifier.Username,
    password: true,
    verificationCode: false,
    isPasswordPrimary: true,
  },
  {
    identifier: SignInIdentifier.Email,
    password: true,
    verificationCode: true,
    isPasswordPrimary: false,
  },
  {
    identifier: SignInIdentifier.Phone,
    password: true,
    verificationCode: true,
    isPasswordPrimary: false,
  },
];

export const enableAllPasswordSignInMethods = async (
  signUp: SignInExperience['signUp'] = defaultSignUpMethod
) =>
  updateSignInExperience({
    signInMode: SignInMode.SignInAndRegister,
    signUp,
    signIn: {
      methods: defaultPasswordSignInMethods,
    },
    mfa: { factors: [], policy: MfaPolicy.UserControlled },
  });

export const resetPasswordPolicy = async () =>
  updateSignInExperience({
    passwordPolicy: {
      length: { min: 8, max: 256 },
      characterTypes: { min: 1 },
      rejects: { pwned: true, repetitionAndSequence: true, userInfo: true },
    },
  });

export const enableAllVerificationCodeSignInMethods = async (
  signUp: SignInExperience['signUp'] = defaultSignUpMethod
) =>
  updateSignInExperience({
    signInMode: SignInMode.SignInAndRegister,
    signUp,
    signIn: {
      methods: defaultVerificationCodeSignInMethods,
    },
    mfa: { factors: [], policy: MfaPolicy.UserControlled },
  });

export const enableUserControlledMfaWithTotp = async () =>
  updateSignInExperience({
    mfa: {
      factors: [MfaFactor.TOTP],
      policy: MfaPolicy.UserControlled,
    },
  });

export const enableMandatoryMfaWithTotp = async () =>
  updateSignInExperience({
    mfa: {
      factors: [MfaFactor.TOTP],
      policy: MfaPolicy.Mandatory,
    },
  });

export const enableMandatoryMfaWithWebAuthn = async () =>
  updateSignInExperience({
    mfa: {
      factors: [MfaFactor.WebAuthn],
      policy: MfaPolicy.Mandatory,
    },
  });

export const enableMandatoryMfaWithTotpAndBackupCode = async () =>
  updateSignInExperience({
    mfa: {
      factors: [MfaFactor.TOTP, MfaFactor.BackupCode],
      policy: MfaPolicy.Mandatory,
    },
  });

export const enableMandatoryMfaWithWebAuthnAndBackupCode = async () =>
  updateSignInExperience({
    mfa: {
      factors: [MfaFactor.WebAuthn, MfaFactor.BackupCode],
      policy: MfaPolicy.Mandatory,
    },
  });

export const resetMfaSettings = async () =>
  updateSignInExperience({ mfa: { policy: MfaPolicy.UserControlled, factors: [] } });
