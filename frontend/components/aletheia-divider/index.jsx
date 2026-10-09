'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaDivider = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthDivider }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthDivider}
        propTypes={{"color":"string","orientation":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaDivider';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaDivider;
