'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCardSelectable = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCardSelectable }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCardSelectable}
        propTypes={{"disabled":"boolean","headingText":"string","overline":"string","selected":"boolean","size":"string","subtitle":"string","tag":"string","type":"string"}}
        slotNames={[{ propName: "img", nativeName: "img" }, { propName: "body", nativeName: "body" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCardSelectable';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCardSelectable;
