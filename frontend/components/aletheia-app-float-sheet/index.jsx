'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppFloatSheet = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppFloatSheet }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppFloatSheet}
        propTypes={{"closable":"boolean","description":"string","descriptionVisible":"boolean","footer":"boolean","headingText":"string","image":"boolean","titleVisible":"boolean"}}
        slotNames={[{ propName: "image", nativeName: "image" }, { propName: "footer", nativeName: "footer" }, { propName: "secondary", nativeName: "secondary" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppFloatSheet';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppFloatSheet;
