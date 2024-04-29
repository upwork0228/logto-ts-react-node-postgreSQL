import { ConnectorError, ConnectorErrorCodes } from '@logto/connector-kit';
import { trySafe } from '@silverhand/essentials';
import type { Middleware } from 'koa';
import { z } from 'zod';

import RequestError from '#src/errors/RequestError/index.js';

export default function koaConnectorErrorHandler<StateT, ContextT>(): Middleware<StateT, ContextT> {
  // Too many error types :-)
  // eslint-disable-next-line complexity
  return async (_, next) => {
    try {
      await next();
    } catch (error: unknown) {
      if (!(error instanceof ConnectorError)) {
        throw error;
      }

      const { code, data } = error;

      const errorDescriptionGuard = z.object({ errorDescription: z.string() });
      const message =
        trySafe(() => errorDescriptionGuard.parse(data))?.errorDescription ?? JSON.stringify(data);

      switch (code) {
        case ConnectorErrorCodes.InvalidMetadata:
        case ConnectorErrorCodes.InvalidConfigGuard:
        case ConnectorErrorCodes.InvalidRequestParameters:
        case ConnectorErrorCodes.InsufficientRequestParameters:
        case ConnectorErrorCodes.InvalidConfig:
        case ConnectorErrorCodes.InvalidCertificate:
        case ConnectorErrorCodes.InvalidResponse: {
          throw new RequestError({ code: `connector.${code}`, status: 400 }, data);
        }

        case ConnectorErrorCodes.SocialAuthCodeInvalid:
        case ConnectorErrorCodes.SocialAccessTokenInvalid:
        case ConnectorErrorCodes.SocialIdTokenInvalid:
        case ConnectorErrorCodes.AuthorizationFailed: {
          throw new RequestError({ code: `connector.${code}`, status: 401 }, data);
        }

        case ConnectorErrorCodes.TemplateNotFound: {
          throw new RequestError(
            {
              code: `connector.${code}`,
              status: 400,
            },
            data
          );
        }

        case ConnectorErrorCodes.NotImplemented: {
          throw new RequestError({ code: `connector.${code}`, status: 501 }, data);
        }

        case ConnectorErrorCodes.RateLimitExceeded: {
          throw new RequestError({ code: `connector.${code}`, status: 429 }, data);
        }

        default: {
          throw new RequestError(
            {
              code: `connector.${code}`,
              status: 400, // Temporarily use 400 to avoid false positives. May update later.
              errorDescription: message,
            },
            data
          );
        }
      }
    }
  };
}
