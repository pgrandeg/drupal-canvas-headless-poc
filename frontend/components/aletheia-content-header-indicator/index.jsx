'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeaderIndicator = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeaderIndicator }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeaderIndicator}
        propTypes={{"badgeColor":"string","icon":"string","operator":"string","overline":"string","overlineTooltipText":"string","overlineTooltipWidth":"number","size":"string","text":"string","tooltipText":"string","tooltipWidth":"number"}}
        slotNames={[{ propName: "slotRight", nativeName: "slot-right" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeaderIndicator';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeaderIndicator;
