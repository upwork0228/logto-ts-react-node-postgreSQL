import { useCallback } from 'react';

import { skipMfa } from '@/apis/interaction';

import useApi from './use-api';
import useErrorHandler from './use-error-handler';
import usePreSignInErrorHandler from './use-pre-sign-in-error-handler';

const useSkipMfa = () => {
  const asyncSkipMfa = useApi(skipMfa);

  const handleError = useErrorHandler();
  const preSignInErrorHandler = usePreSignInErrorHandler({ replace: true });

  return useCallback(async () => {
    const [error, result] = await asyncSkipMfa();
    if (error) {
      await handleError(error, preSignInErrorHandler);
      return;
    }

    if (result) {
      window.location.replace(result.redirectTo);
    }
  }, [asyncSkipMfa, handleError, preSignInErrorHandler]);
};

export default useSkipMfa;
