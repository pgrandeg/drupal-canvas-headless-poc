'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCalendar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCalendar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCalendar}
        propTypes={{"color":"string","disabledDates":"string","highlightedDates":"string","highlightedWeekends":"boolean","max":"string","min":"string","selected":"string","type":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCalendar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCalendar;
