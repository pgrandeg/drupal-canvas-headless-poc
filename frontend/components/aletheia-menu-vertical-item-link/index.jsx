'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuVerticalItemLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuVerticalItemLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuVerticalItemLink}
        propTypes={{"disabled":"boolean","externalLabel":"string","href":"string","icon":"string","rel":"string","selected":"boolean","target":"string","text":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuVerticalItemLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuVerticalItemLink;
