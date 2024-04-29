import { ReservedPlanId } from '@logto/schemas';

import { type SubscriptionPlanQuota } from '@/types/subscriptions';

/**
 * Manually add this support quota item to the plan since it will be compared in the downgrade plan notification modal.
 */
export const ticketSupportResponseTimeMap: Record<string, number> = {
  [ReservedPlanId.Free]: 0,
  [ReservedPlanId.Hobby]: 48,
  [ReservedPlanId.Pro]: 48,
};

/**
 * Define the order of quota items in the downgrade plan notification modal and not eligible for downgrade plan modal.
 */
export const planQuotaItemOrder: Array<keyof SubscriptionPlanQuota> = [
  'mauLimit',
  'tokenLimit',
  'applicationsLimit',
  'machineToMachineLimit',
  'thirdPartyApplicationsLimit',
  'resourcesLimit',
  'scopesPerResourceLimit',
  'customDomainEnabled',
  'omniSignInEnabled',
  'socialConnectorsLimit',
  'mfaEnabled',
  'ssoEnabled',
  'rolesLimit',
  'machineToMachineRolesLimit',
  'scopesPerRoleLimit',
  'organizationsEnabled',
  'auditLogsRetentionDays',
  'hooksLimit',
  'ticketSupportResponseTime',
];

/**
 * Unreleased quota keys will be added here, and it will effect the following:
 * - Related quota items will have a "Coming soon" tag in the plan selection component.
 * - Related quota items will be hidden from the downgrade plan notification modal.
 */
export const comingSoonQuotaKeys: Array<keyof SubscriptionPlanQuota> = [];
