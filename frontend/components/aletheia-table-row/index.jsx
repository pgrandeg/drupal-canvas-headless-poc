'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTableRow = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTableRow }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTableRow}
        propTypes={{"clickable":"boolean","clickableAriaLabel":"string","color":"string","expanded":"boolean","frozen":"string","hasChildren":"boolean","last":"boolean","parentId":"string","reserveClickable":"boolean","reserveExpander":"boolean","rowId":"string","selectable":"string","selected":"boolean","selectionGroupName":"string","size":"string","striped":"string","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }, { propName: "cardContent", nativeName: "card-content" }, { propName: "collapse", nativeName: "collapse" }, { propName: "cardActions", nativeName: "card-actions" }, { propName: "cardFooter", nativeName: "card-footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTableRow';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTableRow;
