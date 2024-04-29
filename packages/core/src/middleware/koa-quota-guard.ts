import type { MiddlewareType } from 'koa';

import { type QuotaLibrary } from '#src/libraries/quota.js';
import { type FeatureQuota } from '#src/utils/subscription/types.js';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'COPY' | 'HEAD' | 'OPTIONS';

type UsageGuardConfig = {
  key: keyof FeatureQuota;
  quota: QuotaLibrary;
  /** Guard usage only for the specified method types. Guard all if not provided. */
  methods?: Method[];
};

export default function koaQuotaGuard<StateT, ContextT, ResponseBodyT>({
  key,
  quota,
  methods,
}: UsageGuardConfig): MiddlewareType<StateT, ContextT, ResponseBodyT> {
  return async (ctx, next) => {
    // eslint-disable-next-line no-restricted-syntax
    if (!methods || methods.includes(ctx.method.toUpperCase() as Method)) {
      await quota.guardKey(key);
    }
    return next();
  };
}
