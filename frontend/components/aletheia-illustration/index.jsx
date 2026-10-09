'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaIllustration = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthIllustration }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthIllustration}
        propTypes={{"ariaLabel":"string","ariaLabelledby":"string","name":"string","width":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaIllustration';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaIllustration;
