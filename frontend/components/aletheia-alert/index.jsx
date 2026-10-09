'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAlert = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAlert }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAlert}
        propTypes={{"closeAriaLabel":"string","color":"string","description":"string","hasClose":"boolean","headingLevel":"number","headingText":"string","isUrgent":"boolean","type":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }, { propName: "button", nativeName: "button" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAlert';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAlert;
