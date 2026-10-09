'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppFaceId = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppFaceId }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppFaceId}
        propTypes={{"type":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppFaceId';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppFaceId;
