'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTableRowItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTableRowItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTableRowItem}
        propTypes={{"alignment":"string","cellWidth":"string","color":"string","expanded":"boolean","expander":"boolean","expanderAriaControls":"string","frozen":"string","hasInteractivity":"boolean","isChild":"boolean","isHeader":"boolean","noFrozenShadow":"boolean","size":"string","striped":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }, { propName: "editable", nativeName: "editable" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTableRowItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTableRowItem;
