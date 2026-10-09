'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCard = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCard }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCard}
        propTypes={{"ariaLabelledBy":"string","clickable":"boolean","fluid":"boolean","maxWidth":"string","orientation":"string","size":"string","width":"string"}}
        slotNames={[{ propName: "img", nativeName: "img" }, { propName: "tag", nativeName: "tag" }, { propName: "thumbnail", nativeName: "thumbnail" }, { propName: "body", nativeName: "body" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCard';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCard;
