'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTooltipTrigger = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTooltipTrigger }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTooltipTrigger}
        propTypes={{"ariaLabel":"string","icon":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTooltipTrigger';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTooltipTrigger;
