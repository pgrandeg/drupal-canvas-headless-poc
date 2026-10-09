'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeaderIndicatorList = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeaderIndicatorList }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeaderIndicatorList}
        propTypes={{"ariaLabel":"string","ariaLabelledby":"string","orientation":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeaderIndicatorList';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeaderIndicatorList;
