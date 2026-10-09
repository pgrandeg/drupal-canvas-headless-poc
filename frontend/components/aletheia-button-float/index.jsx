'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButtonFloat = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButtonFloat }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButtonFloat}
        propTypes={{"color":"string","icon":"string","iconPosition":"string","size":"string","text":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={"text"}
        slotTextDefault={"Button float"}
      />
    );
    Component.displayName = 'AletheiaButtonFloat';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButtonFloat;
