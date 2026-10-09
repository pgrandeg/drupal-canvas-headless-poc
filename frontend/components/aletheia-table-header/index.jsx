'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTableHeader = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTableHeader }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTableHeader}
        propTypes={{"clickable":"boolean","color":"string","frozen":"string","noSelectAll":"boolean","selectAllState":"string","selectable":"string","selectedRows":"number","size":"string","totalRows":"number"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTableHeader';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTableHeader;
