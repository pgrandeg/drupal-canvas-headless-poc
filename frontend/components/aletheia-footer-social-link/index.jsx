'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFooterSocialLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFooterSocialLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFooterSocialLink}
        propTypes={{"ariaDescribedby":"string","ariaLabel":"string","ariaLabelledby":"string","disabled":"boolean","externalLabel":"string","href":"string","icon":"string","iconAriaLabel":"string","target":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFooterSocialLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFooterSocialLink;
