'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTabs = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTabs }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTabs}
        propTypes={{"items":"string","listAriaLabel":"string","type":"string"}}
        slotNames={[{ propName: "panel", nativeName: "panel" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTabs';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTabs;
