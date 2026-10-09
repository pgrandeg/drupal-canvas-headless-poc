'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaChipChoiceGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthChipChoiceGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthChipChoiceGroup}
        propTypes={{"disabled":"boolean","multiple":"boolean","name":"string","size":"string","value":"string","width":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaChipChoiceGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaChipChoiceGroup;
