'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeaderIndicatorGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeaderIndicatorGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeaderIndicatorGroup}
        propTypes={{"ariaLabelledby":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeaderIndicatorGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeaderIndicatorGroup;
