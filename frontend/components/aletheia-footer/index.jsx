'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFooter = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFooter }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFooter}
        propTypes={{"columns":"number","sitemapAriaLabel":"string","type":"string"}}
        slotNames={[{ propName: "utilityTop", nativeName: "utility-top" }, { propName: "sitemap", nativeName: "sitemap" }, { propName: "utilityBottom", nativeName: "utility-bottom" }, { propName: "copyright", nativeName: "copyright" }, { propName: "rightElement", nativeName: "right-element" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFooter';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFooter;
