import { demoAppApplicationId } from '@logto/schemas';
import { trySafe } from '@silverhand/essentials';
import ky, { HTTPError } from 'ky';
import { type KyHeadersInit } from 'node_modules/ky/distribution/types/options.js';

import { logtoUrl } from '#src/constants.js';

describe('content-type: application/json compatibility', () => {
  const api = ky.extend({
    prefixUrl: new URL('/oidc', logtoUrl),
  });

  const expectErrorMessageForPayload = async (
    payload: Record<string, unknown>,
    errorMessage: string,
    headers: KyHeadersInit = {}
  ) => {
    return trySafe(
      api.post('token', {
        headers,
        json: payload,
      }),
      async (error) => {
        if (!(error instanceof HTTPError)) {
          throw new TypeError('Error is not a HTTPError instance.');
        }
        expect(await error.response.json()).toHaveProperty('error_description', errorMessage);
      }
    );
  };

  it('recognizes `application/json` content-type in OIDC token endpoints', async () => {
    await Promise.all([
      expectErrorMessageForPayload(
        { client_id: demoAppApplicationId },
        "missing required parameter 'grant_type'"
      ),
      expectErrorMessageForPayload(
        { client_id: demoAppApplicationId, grant_type: 'refresh_token' },
        "missing required parameter 'refresh_token'"
      ),
    ]);
  });

  it('does not recognize `application/json1` content-type', async () => {
    await expectErrorMessageForPayload(
      { client_id: demoAppApplicationId },
      'only application/x-www-form-urlencoded content-type bodies are supported on POST /token',
      { 'content-type': 'application/json1' }
    );
  });
});
