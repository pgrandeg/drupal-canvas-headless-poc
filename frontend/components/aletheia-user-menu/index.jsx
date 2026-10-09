'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaUserMenu = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthUserMenu }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthUserMenu}
        propTypes={{"initials":"string","open":"boolean","srcImage":"string","type":"string","userName":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaUserMenu';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaUserMenu;
