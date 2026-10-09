'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeader = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeader }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeader}
        propTypes={{"headerAriaLabel":"string","logoType":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeader';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeader;
