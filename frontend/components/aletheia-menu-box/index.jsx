'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuBox = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuBox }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuBox}
        propTypes={{"badgeLabel":"string","badgeMax":"number","badgeValue":"number","behaviour":"string","disabled":"boolean","externalLabel":"string","height":"string","href":"string","icon":"string","open":"boolean","rel":"string","target":"string","text":"string","type":"string","width":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuBox';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuBox;
