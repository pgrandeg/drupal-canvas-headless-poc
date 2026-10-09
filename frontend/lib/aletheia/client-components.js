'use client';

import { setAssetPath } from '@/vendor/aletheia-2-core/packages/stencil-library/components/index.js';

// The React output target defines custom elements lazily. Configure the
// generated components before any of them resolve icon/pictogram assets.
setAssetPath('/aletheia/');

export * from '@/vendor/aletheia-2-core/packages/react-library/dist/components/stencil-generated/components.js';
