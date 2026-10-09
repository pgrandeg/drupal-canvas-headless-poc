'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuButton = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuButton }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuButton}
        propTypes={{"alignment":"string","athAriaLabel":"string","autofocus":"boolean","clear":"boolean","color":"string","disabled":"boolean","icon":"string","open":"boolean","overlayMaxHeight":"string","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuButton';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuButton;
