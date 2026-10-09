'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCardThumbnail = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCardThumbnail }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCardThumbnail}
        propTypes={{"bottomTag":"string","highlightText":"string","topTag":"string","type":"string"}}
        slotNames={[{ propName: "imgThumbnail", nativeName: "img-thumbnail" }, { propName: "avatar", nativeName: "avatar" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCardThumbnail';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCardThumbnail;
