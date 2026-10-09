'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFooterLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFooterLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFooterLink}
        propTypes={{"ariaDescribedby":"string","ariaLabel":"string","ariaLabelledby":"string","disabled":"boolean","externalLabel":"string","href":"string","icon":"string","iconAriaLabel":"string","iconPosition":"string","size":"string","target":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFooterLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFooterLink;
