'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaChipDismiss = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthChipDismiss }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthChipDismiss}
        propTypes={{"disabled":"boolean","headingText":"string","icon":"string","labelDismiss":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaChipDismiss';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaChipDismiss;
