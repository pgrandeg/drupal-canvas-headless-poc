'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCollapseIcon = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCollapseIcon }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCollapseIcon}
        propTypes={{"color":"string","expanded":"boolean","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCollapseIcon';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCollapseIcon;
