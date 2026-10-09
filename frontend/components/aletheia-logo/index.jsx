'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaLogo = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthLogo }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthLogo}
        propTypes={{"ariaLabel":"string","ariaLabelledby":"string","orientation":"string","type":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaLogo';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaLogo;
