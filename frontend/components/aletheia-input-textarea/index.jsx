'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputTextarea = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputTextarea }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputTextarea}
        propTypes={{"autocomplete":"string","autofocus":"boolean","counter":"boolean","counterLabel":"string","disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","inputAriaLabel":"string","inputTabindex":"string","label":"string","maxlength":"number","name":"string","placeholder":"string","readonly":"boolean","required":"boolean","rows":"number","size":"string","tooltipText":"string","tooltipWidth":"number","value":"string","width":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputTextarea';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputTextarea;
