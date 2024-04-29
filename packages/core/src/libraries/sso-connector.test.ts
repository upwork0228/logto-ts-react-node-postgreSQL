import { mockSsoConnector, wellConfiguredSsoConnector } from '#src/__mocks__/sso.js';
import RequestError from '#src/errors/RequestError/index.js';
import { MockQueries } from '#src/test-utils/tenant.js';

import { createSsoConnectorLibrary } from './sso-connector.js';

const { jest } = import.meta;

const findAllSsoConnectors = jest.fn();
const geConnectorById = jest.fn();

const queries = new MockQueries({
  ssoConnectors: { findAll: findAllSsoConnectors, findById: geConnectorById },
});

describe('SsoConnectorLibrary', () => {
  const ssoConnectorLibrary = createSsoConnectorLibrary(queries);

  it('getSsoConnectors() should filter unsupported sso connectors', async () => {
    const { getSsoConnectors } = ssoConnectorLibrary;

    findAllSsoConnectors.mockResolvedValueOnce([
      2,
      [
        mockSsoConnector,
        {
          ...mockSsoConnector,
          providerName: 'unsupported',
        },
      ],
    ]);

    const connectors = await getSsoConnectors();

    expect(connectors).toEqual([2, [mockSsoConnector]]);
  });

  it('getAvailableSsoConnectors() should filter sso connectors with invalid config', async () => {
    const { getAvailableSsoConnectors } = ssoConnectorLibrary;

    findAllSsoConnectors.mockResolvedValueOnce([
      2,
      [
        {
          ...mockSsoConnector,
          domains: ['foo.com'],
        },
        wellConfiguredSsoConnector,
      ],
    ]);

    const connectors = await getAvailableSsoConnectors();

    expect(connectors).toEqual([wellConfiguredSsoConnector]);
  });

  it('getAvailableSsoConnectors() should filter sso connectors with empty domains', async () => {
    const { getAvailableSsoConnectors } = ssoConnectorLibrary;

    findAllSsoConnectors.mockResolvedValueOnce([
      2,
      [
        {
          ...mockSsoConnector,
          config: wellConfiguredSsoConnector.config,
        },
        wellConfiguredSsoConnector,
      ],
    ]);

    const connectors = await getAvailableSsoConnectors();

    expect(connectors).toEqual([wellConfiguredSsoConnector]);
  });

  it('getSsoConnectorById() should throw 404 if the connector is not supported', async () => {
    const { getSsoConnectorById } = ssoConnectorLibrary;

    geConnectorById.mockResolvedValueOnce({
      ...mockSsoConnector,
      providerName: 'unsupported',
    });

    await expect(getSsoConnectorById('id')).rejects.toMatchError(
      new RequestError({
        code: 'connector.not_found',
        status: 404,
      })
    );
  });

  it('getSsoConnectorById() should return the connector if it is supported', async () => {
    const { getSsoConnectorById } = ssoConnectorLibrary;

    geConnectorById.mockResolvedValueOnce(mockSsoConnector);

    const connector = await getSsoConnectorById('id');

    expect(connector).toEqual(mockSsoConnector);
  });
});
