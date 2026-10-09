'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputText = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputText }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputText}
        propTypes={{"autocomplete":"string","autofocus":"boolean","clearButtonAriaLabel":"string","counter":"boolean","counterLabel":"string","disabled":"boolean","feedback":"string","feedbackText":"string","hasClear":"boolean","helperText":"string","hideRequired":"boolean","icon":"string","iconPosition":"string","inputAriaLabel":"string","inputTabindex":"string","label":"string","maxlength":"number","name":"string","pattern":"string","placeholder":"string","readonly":"boolean","required":"boolean","size":"string","submitOnEnter":"boolean","tooltipText":"string","tooltipWidth":"string","type":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputText';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputText;
