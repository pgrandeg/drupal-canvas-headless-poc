'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuButtonItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuButtonItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuButtonItem}
        propTypes={{"disabled":"boolean","groupName":"string","icon":"string","itemTabIndex":"number","name":"string","text":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuButtonItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuButtonItem;
