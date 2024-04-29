import type { ConnectorType, ConnectorResponse } from '@logto/schemas';
import { useCallback, useMemo } from 'react';
import useSWR from 'swr';

import type { RequestError } from './use-api';

const useEnabledConnectorTypes = () => {
  const { data: connectors } = useSWR<ConnectorResponse[], RequestError>('api/connectors');

  const enabledConnectorTypes = useMemo(
    () => connectors?.map(({ type }) => type) ?? [],
    [connectors]
  );

  const isConnectorTypeEnabled = useCallback(
    (connectorType: ConnectorType) => enabledConnectorTypes.includes(connectorType),
    [enabledConnectorTypes]
  );

  return {
    isConnectorTypeEnabled,
  };
};

export default useEnabledConnectorTypes;
