import { type I18nPhrases } from '@logto/connector-kit';
import type { Translation } from '@logto/schemas';

/**
 * @param fullTranslation The translation with full keys
 * @param partialTranslation The translation to check
 * @returns If the flatten keys of `partialTranslation` is a subset of `fullTranslation`
 */
export const isStrictlyPartial = (
  fullTranslation: Translation,
  partialTranslation: Translation
): boolean => {
  return Object.entries(partialTranslation).every(([key, value]) => {
    const fullValue = fullTranslation[key];

    if (!fullValue) {
      return false;
    }

    if (typeof fullValue === 'object' && typeof value === 'object') {
      return isStrictlyPartial(fullValue, value);
    }

    return typeof fullValue === typeof value;
  });
};

export const isKeyOfI18nPhrases = (key: string, phrases: I18nPhrases): key is keyof I18nPhrases =>
  key in phrases;
