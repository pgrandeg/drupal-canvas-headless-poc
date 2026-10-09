'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAccordion = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAccordion }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAccordion}
        propTypes={{"ariaLabel":"string","expand":"string","noLastItemDivider":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAccordion';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAccordion;
