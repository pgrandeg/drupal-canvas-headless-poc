'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCollapse = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCollapse }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCollapse}
        propTypes={{"show":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCollapse';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCollapse;
