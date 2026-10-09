'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAccordionItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAccordionItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAccordionItem}
        propTypes={{"description":"string","disabled":"boolean","expanded":"boolean","headingLevel":"string","headingText":"string","icon":"string","noDivider":"boolean"}}
        slotNames={[{ propName: "headerDetail", nativeName: "header-detail" }, { propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAccordionItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAccordionItem;
