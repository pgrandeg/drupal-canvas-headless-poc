'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButton = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButton }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButton}
        propTypes={{"clear":"boolean","color":"string","disabled":"boolean","fullWidth":"boolean","icon":"string","iconPosition":"string","size":"string","type":"string","text":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={"text"}
        slotTextDefault={"Button"}
      />
    );
    Component.displayName = 'AletheiaButton';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButton;
