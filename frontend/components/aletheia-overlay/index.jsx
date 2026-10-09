'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaOverlay = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthOverlay }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthOverlay}
        propTypes={{"closeOnOutsideClick":"boolean","maxHeight":"number","maxWidth":"number","overlayAriaLabel":"string","position":"string","positionX":"number","positionY":"number","size":"string","triggerId":"string","type":"string","zIndex":"number"}}
        slotNames={[{ propName: "anchor", nativeName: "anchor" }, { propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaOverlay';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaOverlay;
