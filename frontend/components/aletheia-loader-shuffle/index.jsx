'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaLoaderShuffle = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthLoaderShuffle }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthLoaderShuffle}
        propTypes={{"accessibleText":"string","headingLevel":"number","headingText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaLoaderShuffle';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaLoaderShuffle;
