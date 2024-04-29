import { mobileUriSchemeProtocolRegEx, webRedirectUriProtocolRegEx } from '../regex.js';

export const validateRedirectUrl = (url: string, type: 'web' | 'mobile') => {
  try {
    const { protocol } = new URL(url);
    const protocolRegEx =
      type === 'mobile' ? mobileUriSchemeProtocolRegEx : webRedirectUriProtocolRegEx;

    return protocolRegEx.test(protocol);
  } catch {
    return false;
  }
};

export const validateUriOrigin = (url: string) => {
  try {
    return new URL(url).origin === url;
  } catch {
    return false;
  }
};

export const isValidUrl = (url?: string) => {
  try {
    return Boolean(url && new URL(url));
  } catch {
    return false;
  }
};

/**
 * Check if the given URL is localhost
 */
export const isLocalhost = (url: string) => {
  const parsedUrl = new URL(url);

  return ['localhost', '127.0.0.1', '::1'].includes(parsedUrl.hostname);
};
