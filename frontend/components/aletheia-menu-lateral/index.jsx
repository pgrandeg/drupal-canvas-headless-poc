'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuLateral = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuLateral }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuLateral}
        propTypes={{"items":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuLateral';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuLateral;
