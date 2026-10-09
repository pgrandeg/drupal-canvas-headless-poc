'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaLinkButton = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthLinkButton }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthLinkButton}
        propTypes={{"clear":"boolean","color":"string","disabled":"boolean","externalLabel":"string","fullWidth":"boolean","href":"string","icon":"string","iconPosition":"string","linkAriaLabel":"string","size":"string","target":"string","text":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaLinkButton';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaLinkButton;
