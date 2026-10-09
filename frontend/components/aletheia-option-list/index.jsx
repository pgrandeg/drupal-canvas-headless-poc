'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaOptionList = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthOptionList }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthOptionList}
        propTypes={{"color":"string","hasSearch":"boolean","noResultText":"string","searchAriaLabel":"string","searchAriaLive":"string","searchPlaceholder":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaOptionList';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaOptionList;
