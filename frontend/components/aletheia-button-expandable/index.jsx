'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButtonExpandable = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButtonExpandable }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButtonExpandable}
        propTypes={{"collapseTarget":"string","disabled":"boolean","icon":"string","size":"string","text":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={"text"}
        slotTextDefault={"Button expandable"}
      />
    );
    Component.displayName = 'AletheiaButtonExpandable';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButtonExpandable;
