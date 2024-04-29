import { createMockUtils } from '@logto/shared/esm';
import Provider from 'oidc-provider';
import Sinon from 'sinon';

import { EnvSet, UserApps } from '#src/env-set/index.js';
import { MockQueries } from '#src/test-utils/tenant.js';
import { createContextWithRouteParameters } from '#src/utils/test-utils.js';

const { jest } = import.meta;

const { mockEsmWithActual } = createMockUtils(jest);

await mockEsmWithActual('fs/promises', () => ({
  readdir: jest.fn().mockResolvedValue(['index.js']),
}));

const {
  default: koaSpaSessionGuard,
  sessionNotFoundPath,
  guardedPath,
} = await import('./koa-spa-session-guard.js');

describe('koaSpaSessionGuard', () => {
  const envBackup = process.env;
  const provider = new Provider('https://logto.test');
  const interactionDetails = jest.spyOn(provider, 'interactionDetails');
  const getRowsByKeys = jest.fn().mockResolvedValue({ rows: [] });
  const queries = new MockQueries({ logtoConfigs: { getRowsByKeys } });

  beforeEach(() => {
    process.env = { ...envBackup };
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  const next = jest.fn();

  for (const app of Object.values(UserApps)) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    it(`${app} path should not redirect`, async () => {
      const ctx = createContextWithRouteParameters({
        url: `/${app}/foo`,
      });

      await koaSpaSessionGuard(provider, queries)(ctx, next);

      expect(ctx.redirect).not.toBeCalled();
    });
  }

  it(`should not redirect for path ${sessionNotFoundPath}`, async () => {
    interactionDetails.mockRejectedValue(new Error('session not found'));
    const ctx = createContextWithRouteParameters({
      url: `${sessionNotFoundPath}`,
    });
    await koaSpaSessionGuard(provider, queries)(ctx, next);
    expect(ctx.redirect).not.toBeCalled();
  });

  it(`should not redirect for path /callback`, async () => {
    interactionDetails.mockRejectedValue(new Error('session not found'));
    const ctx = createContextWithRouteParameters({
      url: '/callback/github',
    });
    await koaSpaSessionGuard(provider, queries)(ctx, next);
    expect(ctx.redirect).not.toBeCalled();
  });

  it('should not redirect if session found', async () => {
    // @ts-expect-error
    interactionDetails.mockResolvedValue({});
    const ctx = createContextWithRouteParameters({
      url: `/sign-in`,
    });
    await koaSpaSessionGuard(provider, queries)(ctx, next);
    expect(ctx.redirect).not.toBeCalled();
  });

  for (const path of ['/', ...guardedPath]) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    it(`should redirect if session not found for ${path}`, async () => {
      interactionDetails.mockRejectedValue(new Error('session not found'));
      const ctx = createContextWithRouteParameters({
        url: `${path}/foo`,
      });
      await koaSpaSessionGuard(provider, queries)(ctx, next);
      expect(ctx.redirect).toBeCalledWith('https://logto.test/unknown-session');
    });
  }

  it('should redirect to configured URL if session not found for a selected path', async () => {
    interactionDetails.mockRejectedValue(new Error('session not found'));
    getRowsByKeys.mockResolvedValueOnce({ rows: [{ value: { url: 'https://foo.bar' } }] });

    const ctx = createContextWithRouteParameters({
      url: `${guardedPath[0]!}/foo`,
    });
    await koaSpaSessionGuard(provider, queries)(ctx, next);
    expect(ctx.redirect).toBeCalledWith('https://foo.bar');
  });

  it(`should redirect to current hostname if isDomainBasedMultiTenancy`, async () => {
    const stub = Sinon.stub(EnvSet, 'values').value({
      ...EnvSet.values,
      isDomainBasedMultiTenancy: true,
    });
    interactionDetails.mockRejectedValue(new Error('session not found'));
    const ctx = createContextWithRouteParameters({
      url: '/sign-in/foo',
    });
    await koaSpaSessionGuard(provider, queries)(ctx, next);
    expect(ctx.redirect).toBeCalledWith('https://test.com/unknown-session');
    stub.restore();
  });
});
