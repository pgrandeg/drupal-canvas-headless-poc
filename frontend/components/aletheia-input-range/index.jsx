'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputRange = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputRange }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputRange}
        propTypes={{"disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","inputAriaLabel":"string","inputAriaLabelEnd":"string","inputAriaLabelStart":"string","label":"string","labelEnd":"string","labelStart":"string","max":"number","min":"number","name":"string","placeholderEnd":"string","placeholderStart":"string","readonly":"boolean","requiredEnd":"boolean","requiredStart":"boolean","size":"string","step":"number","tooltipText":"string","tooltipWidth":"number","unit":"string","unitAriaLabel":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputRange';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputRange;
