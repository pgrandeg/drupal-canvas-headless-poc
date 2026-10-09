'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCarousel = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCarousel }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCarousel}
        propTypes={{"autoResize":"boolean","hasPagination":"boolean","headingAlignment":"string","headingLevel":"number","headingSubtitle":"string","headingText":"string","headingType":"string","itemsPerView":"number","jump":"number","layout":"string","loop":"boolean","navigationPosition":"string","nextButtonAriaLabel":"string","nextSlideAnnounce":"string","prevButtonAriaLabel":"string","prevSlideAnnounce":"string"}}
        slotNames={[{ propName: "action", nativeName: "action" }, { propName: "header", nativeName: "header" }, { propName: "content", nativeName: "content" }, { propName: "footer", nativeName: "footer" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCarousel';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCarousel;
