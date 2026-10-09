'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaDatepicker = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthDatepicker }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthDatepicker}
        propTypes={{"autofocus":"boolean","color":"string","disabled":"boolean","disabledDates":"string","feedback":"string","feedbackText":"string","format":"string","helperText":"string","hideRequired":"boolean","highlightedDates":"string","highlightedWeekends":"boolean","inputAriaLabel":"string","label":"string","max":"string","min":"string","name":"string","placeholder":"string","readonly":"boolean","required":"boolean","size":"string","submitOnEnter":"boolean","tooltipText":"string","type":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaDatepicker';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaDatepicker;
