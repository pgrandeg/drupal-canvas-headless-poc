'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaLoaderSpinner = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthLoaderSpinner }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthLoaderSpinner}
        propTypes={{"accessibleText":"string","headingLevel":"number","headingText":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaLoaderSpinner';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaLoaderSpinner;
