'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeader = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeader }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeader}
        propTypes={{"backLinkAriaLabel":"string","backLinkHref":"string"}}
        slotNames={[{ propName: "avatar", nativeName: "avatar" }, { propName: "heading", nativeName: "heading" }, { propName: "description", nativeName: "description" }, { propName: "status", nativeName: "status" }, { propName: "actionBar", nativeName: "action-bar" }, { propName: "body", nativeName: "body" }, { propName: "list", nativeName: "list" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeader';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeader;
