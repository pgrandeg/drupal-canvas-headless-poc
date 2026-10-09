'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderDesktop = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderDesktop }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderDesktop}
        propTypes={{"closeButtonAriaLabel":"string","hasActionGroupSeparator":"boolean","hasNavEndSeparator":"boolean","hasUserSeparator":"boolean","logoType":"string","triggerId":"string"}}
        slotNames={[{ propName: "navStart", nativeName: "nav-start" }, { propName: "actionGroup", nativeName: "action-group" }, { propName: "user", nativeName: "user" }, { propName: "navEnd", nativeName: "nav-end" }, { propName: "globalSearch", nativeName: "global-search" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderDesktop';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderDesktop;
