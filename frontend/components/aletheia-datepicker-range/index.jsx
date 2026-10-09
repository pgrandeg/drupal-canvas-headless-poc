'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaDatepickerRange = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthDatepickerRange }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthDatepickerRange}
        propTypes={{"autofocus":"boolean","color":"string","disabled":"boolean","disabledDates":"string","feedback":"string","feedbackText":"string","format":"string","helperText":"string","hidePanel":"boolean","hideRequired":"boolean","highlightedDates":"string","highlightedWeekends":"boolean","inputAriaLabelEnd":"string","inputAriaLabelStart":"string","label":"string","labelEnd":"string","labelStart":"string","max":"string","min":"string","name":"string","placeholderEnd":"string","placeholderStart":"string","readonly":"boolean","required":"boolean","requiredEnd":"boolean","requiredStart":"boolean","size":"string","submitOnEnter":"boolean","tooltipText":"string","type":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaDatepickerRange';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaDatepickerRange;
