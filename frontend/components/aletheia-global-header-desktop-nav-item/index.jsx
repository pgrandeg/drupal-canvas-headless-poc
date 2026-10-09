'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderDesktopNavItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderDesktopNavItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderDesktopNavItem}
        propTypes={{"hasSeparatorLeft":"boolean","hasSeparatorRight":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderDesktopNavItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderDesktopNavItem;
