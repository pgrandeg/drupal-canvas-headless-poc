'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuLateralItemAction = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuLateralItemAction }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuLateralItemAction}
        propTypes={{"ariaLabel":"string","badgeLabel":"string","badgeMax":"number","badgeValue":"number","disabled":"boolean","icon":"string","name":"string","selected":"boolean","tooltipText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuLateralItemAction';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuLateralItemAction;
