import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Vue',
  description:
    'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
  target: ApplicationType.SPA,
  sample: {
    repo: 'js',
    path: 'packages/vue-sample',
  },
  isFeatured: true,
  fullGuide: {
    title: 'Full Vue SDK tutorial',
    url: 'https://docs.logto.io/sdk/vue',
  },
});

export default metadata;
