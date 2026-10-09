'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaListItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthListItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthListItem}
        propTypes={{"athAriaLabel":"string","clickable":"boolean","description":"string","disabled":"boolean","externalLabel":"string","hasDivider":"boolean","headingLevel":"number","headingText":"string","href":"string","orientation":"string","rel":"string","size":"string","subtitle":"string","target":"string","tooltip":"string","tooltipMaxWidth":"number"}}
        slotNames={[{ propName: "leftDetail", nativeName: "left-detail" }, { propName: "bottomDetail", nativeName: "bottom-detail" }, { propName: "rightDetail", nativeName: "right-detail" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaListItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaListItem;
