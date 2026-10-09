'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaUserDetail = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthUserDetail }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthUserDetail}
        propTypes={{"buttonAriaLabel":"string","clickable":"boolean","description":"string","initials":"string","srcImage":"string","type":"string","userName":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaUserDetail';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaUserDetail;
