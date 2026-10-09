'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaChipChoice = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthChipChoice }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthChipChoice}
        propTypes={{"disabled":"boolean","icon":"string","label":"string","name":"string","role":"string","selected":"boolean","size":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaChipChoice';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaChipChoice;
