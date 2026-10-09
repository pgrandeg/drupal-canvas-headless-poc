'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTable = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTable }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTable}
        propTypes={{"clickable":"boolean","color":"string","frozen":"string","noSelectAll":"boolean","selectable":"string","size":"string","striped":"string"}}
        slotNames={[{ propName: "header", nativeName: "header" }, { propName: "body", nativeName: "body" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTable';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTable;
