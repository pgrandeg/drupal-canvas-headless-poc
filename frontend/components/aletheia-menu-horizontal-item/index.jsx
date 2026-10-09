'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuHorizontalItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuHorizontalItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuHorizontalItem}
        propTypes={{"badgeLabel":"string","badgeMax":"number","badgeValue":"number","disabled":"boolean","externalLabel":"string","href":"string","label":"string","rel":"string","selected":"boolean","target":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuHorizontalItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuHorizontalItem;
