'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTableBody = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTableBody }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTableBody}
        propTypes={{}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTableBody';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTableBody;
