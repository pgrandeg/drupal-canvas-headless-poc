'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFooterLinkGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFooterLinkGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFooterLinkGroup}
        propTypes={{"alignment":"string","gapSize":"string","headingText":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFooterLinkGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFooterLinkGroup;
