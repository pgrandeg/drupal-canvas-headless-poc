'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppNavbar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppNavbar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppNavbar}
        propTypes={{"avatarInitials":"string","bodyText":"string","hasBack":"boolean","hasBodyText":"boolean","hasImage":"boolean","hasQuickAction":"boolean","hasSearch":"boolean","headingText":"string","mode":"string","step":"number","steps":"number"}}
        slotNames={[{ propName: "search", nativeName: "search" }, { propName: "quickAction", nativeName: "quick-action" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppNavbar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppNavbar;
