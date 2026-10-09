'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuLateralItemLink = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuLateralItemLink }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuLateralItemLink}
        propTypes={{"ariaLabel":"string","badgeLabel":"string","badgeMax":"number","badgeValue":"number","disabled":"boolean","externalLabel":"string","href":"string","icon":"string","name":"string","rel":"string","selected":"boolean","target":"string","tooltipText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuLateralItemLink';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuLateralItemLink;
