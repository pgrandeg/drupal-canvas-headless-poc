'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthLink}
        propTypes={{"ariaDescribedby":"string","ariaLabel":"string","ariaLabelledby":"string","disabled":"boolean","externalLabel":"string","icon":"string","iconAriaLabel":"string","linkHref":"string","linkTarget":"string","size":"string","underline":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaLink;
