'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaRadioButton = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthRadioButton }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthRadioButton}
        propTypes={{"ariaLabel":"string","checked":"boolean","disabled":"boolean","label":"string","name":"string","readonly":"boolean","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaRadioButton';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaRadioButton;
