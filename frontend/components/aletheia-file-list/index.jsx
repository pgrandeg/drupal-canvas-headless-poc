'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFileList = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFileList }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFileList}
        propTypes={{}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFileList';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFileList;
