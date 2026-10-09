'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuVerticalItemAction = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuVerticalItemAction }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuVerticalItemAction}
        propTypes={{"disabled":"boolean","icon":"string","open":"boolean","selected":"boolean","text":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuVerticalItemAction';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuVerticalItemAction;
