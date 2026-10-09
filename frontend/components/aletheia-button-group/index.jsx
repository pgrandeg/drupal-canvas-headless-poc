'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButtonGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButtonGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButtonGroup}
        propTypes={{"orientation":"string","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaButtonGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButtonGroup;
