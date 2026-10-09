'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSwitch = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSwitch }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSwitch}
        propTypes={{"disabled":"boolean","name":"string","readonly":"boolean","selected":"boolean"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSwitch';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSwitch;
