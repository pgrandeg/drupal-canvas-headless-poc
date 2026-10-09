'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaActionBar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthActionBar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthActionBar}
        propTypes={{"alignment":"string","size":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaActionBar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaActionBar;
