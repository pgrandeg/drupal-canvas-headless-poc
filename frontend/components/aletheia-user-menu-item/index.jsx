'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaUserMenuItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthUserMenuItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthUserMenuItem}
        propTypes={{"avatarSize":"string","buttonAriaLabel":"string","description":"string","disabled":"boolean","initials":"string","srcImage":"string","type":"string","userName":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaUserMenuItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaUserMenuItem;
