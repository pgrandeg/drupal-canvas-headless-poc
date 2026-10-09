'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaModal = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthModal }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthModal}
        propTypes={{"appearance":"string","autofocus":"boolean","clickOutsideClose":"boolean","closeAriaLabel":"string","fullScreen":"boolean","hasClose":"boolean","hasDivider":"boolean","headingLevel":"number","headingText":"string","isAlert":"boolean","maxHeight":"string","maxWidth":"string","open":"boolean","size":"string","subtitleText":"string"}}
        slotNames={[{ propName: "customImage", nativeName: "custom-image" }, { propName: "body", nativeName: "body" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaModal';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaModal;
