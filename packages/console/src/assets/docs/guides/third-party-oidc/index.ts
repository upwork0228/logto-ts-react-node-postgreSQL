import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'OIDC',
  description: 'Use Logto as a third-party OIDC identity provider (IdP) for your application. ',
  target: ApplicationType.Traditional,
  isThirdParty: true,
});

export default metadata;
