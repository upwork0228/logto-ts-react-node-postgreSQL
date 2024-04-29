import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Machine-to-machine',
  description: 'Enables direct communication between machines.',
  target: ApplicationType.MachineToMachine,
  isFeatured: true,
  fullGuide: {
    title: 'Full machine-to-machine integration tutorial',
    url: 'https://docs.logto.io/sdk/m2m',
  },
});

export default metadata;
