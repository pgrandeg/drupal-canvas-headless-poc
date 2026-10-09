'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSegmentedControlItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSegmentedControlItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSegmentedControlItem}
        propTypes={{"color":"string","disabled":"boolean","icon":"string","iconPosition":"string","selected":"boolean","size":"string","type":"string","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSegmentedControlItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSegmentedControlItem;
