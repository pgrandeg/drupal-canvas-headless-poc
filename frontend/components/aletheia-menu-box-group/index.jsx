'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuBoxGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuBoxGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuBoxGroup}
        propTypes={{"itemsBehaviour":"string","itemsHeight":"string","itemsWidth":"string","orientation":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuBoxGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuBoxGroup;
