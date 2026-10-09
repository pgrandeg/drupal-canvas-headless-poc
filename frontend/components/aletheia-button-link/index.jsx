'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButtonLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButtonLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButtonLink}
        propTypes={{"color":"string","disabled":"boolean","icon":"string","iconPosition":"string","size":"string","text":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={"text"}
        slotTextDefault={"Button link"}
      />
    );
    Component.displayName = 'AletheiaButtonLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButtonLink;
