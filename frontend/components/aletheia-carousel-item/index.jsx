'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCarouselItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCarouselItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCarouselItem}
        propTypes={{"value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCarouselItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCarouselItem;
