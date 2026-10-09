'use client';

import { useEffect } from 'react';

export default function AletheiaRuntime() {
  useEffect(() => {
    let active = true;

    Promise.all([
      import('@/vendor/aletheia-2-core/packages/stencil-library/components/index.js'),
      import('@/vendor/aletheia-2-core/packages/stencil-library/loader/index.js'),
    ]).then(([{ setAssetPath }, { defineCustomElements }]) => {
      if (!active) return;
      setAssetPath('/aletheia/');
      defineCustomElements(window, { resourcesUrl: '/aletheia/' });
    });

    return () => {
      active = false;
    };
  }, []);

  return null;
}
