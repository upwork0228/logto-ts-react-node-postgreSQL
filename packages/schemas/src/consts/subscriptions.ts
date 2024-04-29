/**
 * Logto-provided predefined subscription plan IDs.
 *
 * In theory, the subscription plan ID will be a random string,
 * but Logto provides some predefined subscription plans and their IDs are reserved plan IDs.
 */
export enum ReservedPlanId {
  Free = 'free',
  /**
   * @deprecated
   * In recent refactoring, the `hobby` plan is now treated as the `pro` plan.
   * Only use this plan ID to check if a plan is a `pro` plan or not.
   * This plan ID will be renamed to `pro` after legacy Stripe data is migrated by @darcyYe
   *
   * Todo @darcyYe:
   * - LOG-7846: Rename `hobby` to `pro` and `pro` to `legacy-pro`
   * - LOG-8339: Migrate legacy Stripe data
   */
  Hobby = 'hobby',
  /**
   * @deprecated
   * Now this `pro` ID is not used anymore, we use `hobby` as the `pro` plan ID.
   * Only use this `pro` value when displaying the plan ID to the user.
   *
   * Todo @darcyYe see `Hobby` todo
   */
  Pro = 'pro',
  Development = 'dev',
}
