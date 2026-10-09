'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSegmentedControl = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSegmentedControl }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSegmentedControl}
        propTypes={{"ariaLabel":"string","color":"string","disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","label":"string","name":"string","required":"boolean","requiredAriaLabel":"string","size":"string","tooltipText":"string","tooltipWidth":"number","type":"string","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSegmentedControl';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSegmentedControl;
