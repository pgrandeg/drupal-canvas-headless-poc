'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaPanel = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthPanel }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthPanel}
        propTypes={{"focusable":"boolean","label":"string"}}
        slotNames={[{ propName: "actions", nativeName: "actions" }, { propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaPanel';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaPanel;
