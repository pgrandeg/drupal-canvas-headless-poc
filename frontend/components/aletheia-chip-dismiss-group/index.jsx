'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaChipDismissGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthChipDismissGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthChipDismissGroup}
        propTypes={{"disabled":"boolean","size":"string","width":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaChipDismissGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaChipDismissGroup;
