'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTooltip = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTooltip }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTooltip}
        propTypes={{"color":"string","hasArrow":"boolean","headingText":"string","maxWidth":"number","position":"string","trigger":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTooltip';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTooltip;
