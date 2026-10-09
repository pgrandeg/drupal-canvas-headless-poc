'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTableHeaderItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTableHeaderItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTableHeaderItem}
        propTypes={{"alignment":"string","cellWidth":"string","color":"string","frozen":"string","hasInteractivity":"boolean","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTableHeaderItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTableHeaderItem;
