'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCardSelectableGroup = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCardSelectableGroup }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCardSelectableGroup}
        propTypes={{"disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","label":"string","multiple":"boolean","name":"string","orientation":"string","readonly":"boolean","required":"boolean","requiredAriaLabel":"string","size":"string","tooltipText":"string","tooltipWidth":"number","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCardSelectableGroup';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCardSelectableGroup;
