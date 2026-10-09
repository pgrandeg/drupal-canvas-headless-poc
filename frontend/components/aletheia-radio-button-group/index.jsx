'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaRadioButtonGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthRadioButtonGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthRadioButtonGroup}
        propTypes={{"ariaLabel":"string","disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","label":"string","name":"string","orientation":"string","readonly":"boolean","requiredAriaLabel":"string","showRequired":"boolean","tooltipText":"string","tooltipWidth":"number","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaRadioButtonGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaRadioButtonGroup;
