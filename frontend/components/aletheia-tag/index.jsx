'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTag = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTag }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTag}
        propTypes={{"color":"string","headingText":"string","icon":"string","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTag';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTag;
