import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: '.NET Core (Blazor WASM)',
  description: 'Integrate Logto into your .NET Core Blazor WebAssembly app.',
  target: ApplicationType.SPA,
  sample: {
    repo: 'csharp',
    path: '/',
  },
  fullGuide: {
    title: 'Full .NET Core (Blazor WASM) integration tutorial',
    url: 'https://docs.logto.io/sdk/dotnet-core/blazor-wasm',
  },
});

export default metadata;
