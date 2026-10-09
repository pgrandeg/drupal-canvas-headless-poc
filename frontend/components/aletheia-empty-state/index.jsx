'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaEmptyState = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthEmptyState }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthEmptyState}
        propTypes={{"description":"string","headingLevel":"number","headingSize":"string","headingText":"string","hideImage":"boolean","loadingLabel":"string","type":"string"}}
        slotNames={[{ propName: "body", nativeName: "body" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaEmptyState';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaEmptyState;
