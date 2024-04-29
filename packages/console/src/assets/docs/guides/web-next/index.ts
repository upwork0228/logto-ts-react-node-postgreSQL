import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Next.js',
  description:
    'Next.js is a React framework for production - it makes building fullstack React apps a breeze and ships with built-in SSR.',
  target: ApplicationType.Traditional,
  sample: {
    repo: 'js',
    path: 'packages/next-sample',
  },
  isFeatured: true,
  fullGuide: {
    title: 'Full Next.js SDK tutorial',
    url: 'https://docs.logto.io/sdk/next',
  },
});

export default metadata;
