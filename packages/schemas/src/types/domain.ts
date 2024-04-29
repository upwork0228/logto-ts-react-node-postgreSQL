import { type z } from 'zod';

import { Domains } from '../db-entries/index.js';

export const domainSelectFields = Object.freeze([
  'id',
  'domain',
  'status',
  'errorMessage',
  'dnsRecords',
] as const);

export const domainResponseGuard = Domains.guard.pick({
  id: true,
  domain: true,
  status: true,
  errorMessage: true,
  dnsRecords: true,
});

export type DomainResponse = z.infer<typeof domainResponseGuard>;
