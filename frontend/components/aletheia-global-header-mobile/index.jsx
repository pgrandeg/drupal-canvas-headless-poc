'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderMobile = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderMobile }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderMobile}
        propTypes={{"backButtonAriaLabel":"string","closeButtonAriaLabel":"string","logoType":"string","menuButtonAriaLabel":"string"}}
        slotNames={[{ propName: "actionGroup", nativeName: "action-group" }, { propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderMobile';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderMobile;
