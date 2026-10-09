'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCheckboxGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCheckboxGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCheckboxGroup}
        propTypes={{"disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","label":"string","name":"string","readonly":"boolean","requiredAriaLabel":"string","showRequired":"boolean","tooltipText":"string","tooltipWidth":"number"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCheckboxGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCheckboxGroup;
