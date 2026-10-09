'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaList = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthList }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthList}
        propTypes={{"clickable":"boolean","disabled":"boolean","hasDivider":"boolean","orientation":"string","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaList';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaList;
