'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputCounter = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputCounter }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputCounter}
        propTypes={{"disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideControls":"boolean","hideRequired":"boolean","inputAriaLabel":"string","label":"string","max":"number","min":"number","name":"string","placeholder":"string","readonly":"boolean","required":"boolean","size":"string","step":"number","tooltipText":"string","tooltipWidth":"number","unit":"string","unitAriaLabel":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputCounter';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputCounter;
