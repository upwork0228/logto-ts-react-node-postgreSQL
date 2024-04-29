import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Python',
  description: 'Integrate Logto into your Python web app, such as Django and Flask.',
  target: ApplicationType.Traditional,
  sample: {
    repo: 'python',
    path: 'samples',
  },
  fullGuide: {
    title: 'Full Python SDK tutorial',
    url: 'https://docs.logto.io/sdk/python',
  },
});

export default metadata;
