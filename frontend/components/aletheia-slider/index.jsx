'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSlider = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSlider }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSlider}
        propTypes={{"counterWidth":"string","detailFirst":"string","detailLast":"string","disabled":"boolean","feedback":"string","feedbackCounter":"string","feedbackText":"string","fromAriaLabel":"string","groupAriaLabel":"string","helperText":"string","labelGroup":"string","max":"number","min":"number","name":"string","readonly":"boolean","required":"boolean","showRequired":"boolean","step":"number","stepped":"boolean","toAriaLabel":"string","tooltipText":"string","type":"string","unit":"string","value":"string","valueText":"string","width":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSlider';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSlider;
