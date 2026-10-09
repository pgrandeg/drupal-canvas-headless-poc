'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuVertical = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuVertical }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuVertical}
        propTypes={{"appearance":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuVertical';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuVertical;
