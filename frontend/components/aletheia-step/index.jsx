'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaStep = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthStep }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthStep}
        propTypes={{"actionText":"string","alignment":"string","ariaLiveMessage":"string","athAriaLabel":"string","athId":"number","athRole":"string","clickable":"boolean","collapseLabel":"string","completedLabel":"string","disabled":"boolean","errorLabel":"string","expandLabel":"string","feedback":"string","headingText":"string","isCollapsable":"boolean","isComplete":"boolean","isExpanded":"boolean","number":"number","readonly":"boolean","selected":"boolean","size":"string","total":"number"}}
        slotNames={[{ propName: "content", nativeName: "content" }, { propName: "mobileDetail", nativeName: "mobile-detail" }, { propName: "mobileContent", nativeName: "mobile-content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaStep';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaStep;
