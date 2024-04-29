import { type Optional, trySafe, conditionalString } from '@silverhand/essentials';
import type { MiddlewareType } from 'koa';
import type { IRouterParamContext } from 'koa-router';

import {
  type InteractionHookContext,
  type InteractionHookResult,
} from '#src/libraries/hook/index.js';
import type Libraries from '#src/tenants/Libraries.js';

import { getInteractionStorage } from '../utils/interaction.js';

import type { WithInteractionDetailsContext } from './koa-interaction-details.js';

type AssignInteractionHookResult = (result: InteractionHookResult) => void;

export type WithInteractionHooksContext<
  ContextT extends IRouterParamContext = IRouterParamContext,
> = ContextT & { assignInteractionHookResult: AssignInteractionHookResult };

/**
 * The factory to create a new interaction hook middleware function.
 * Interaction related event hooks will be triggered once we got the interaction hook result.
 * Use `assignInteractionHookResult` to assign the interaction hook result.
 */
export default function koaInteractionHooks<
  StateT,
  ContextT extends WithInteractionDetailsContext,
  ResponseT,
>({
  hooks: { triggerInteractionHooks },
}: Libraries): MiddlewareType<StateT, WithInteractionHooksContext<ContextT>, ResponseT> {
  return async (ctx, next) => {
    const { event } = getInteractionStorage(ctx.interactionDetails.result);
    const {
      interactionDetails,
      header: { 'user-agent': userAgent },
      ip,
    } = ctx;

    // Predefined interaction hook context
    const interactionHookContext: InteractionHookContext = {
      event,
      sessionId: interactionDetails.jti,
      applicationId: conditionalString(interactionDetails.params.client_id),
      userIp: ip,
    };

    // eslint-disable-next-line @silverhand/fp/no-let
    let interactionHookResult: Optional<InteractionHookResult>;

    /**
     * Assign an interaction hook result to trigger webhook.
     * Calling it multiple times will overwrite the original result, but only one webhook will be triggered.
     * @param result The result to assign.
     */
    ctx.assignInteractionHookResult = (result) => {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      interactionHookResult = result;
    };

    await next();

    if (interactionHookResult) {
      // Hooks should not crash the app
      void trySafe(
        triggerInteractionHooks(interactionHookContext, interactionHookResult, userAgent)
      );
    }
  };
}
