import {
  type CreateSsoConnector,
  type SsoConnector,
  type SsoConnectorProvidersResponse,
} from '@logto/schemas';

import { authedAdminApi } from '#src/api/api.js';

export type SsoConnectorWithProviderConfig = SsoConnector & {
  providerLogo: string;
  providerLogoDark: string;
  providerConfig?: Record<string, unknown>;
};

export const getSsoConnectorFactories = async () =>
  authedAdminApi.get('sso-connector-providers').json<SsoConnectorProvidersResponse>();

export const createSsoConnector = async (data: Partial<CreateSsoConnector>) =>
  authedAdminApi
    .post('sso-connectors', {
      json: data,
    })
    .json<SsoConnector>();

export const getSsoConnectors = async () =>
  authedAdminApi.get('sso-connectors').json<SsoConnectorWithProviderConfig[]>();

export const getSsoConnectorById = async (id: string) =>
  authedAdminApi.get(`sso-connectors/${id}`).json<SsoConnectorWithProviderConfig>();

export const deleteSsoConnectorById = async (id: string) =>
  authedAdminApi.delete(`sso-connectors/${id}`).json<void>();

export const patchSsoConnectorById = async (id: string, data: Partial<SsoConnector>) =>
  authedAdminApi
    .patch(`sso-connectors/${id}`, {
      json: data,
    })
    .json<SsoConnectorWithProviderConfig>();
