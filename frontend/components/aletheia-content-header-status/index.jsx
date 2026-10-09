'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeaderStatus = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeaderStatus }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeaderStatus}
        propTypes={{"color":"string","status":"string","tooltipText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeaderStatus';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeaderStatus;
