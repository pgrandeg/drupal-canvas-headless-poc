'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaBadge = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthBadge }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthBadge}
        propTypes={{"color":"string","distanceX":"number","distanceY":"number","label":"string","max":"number","position":"string","type":"string","value":"number"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaBadge';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaBadge;
