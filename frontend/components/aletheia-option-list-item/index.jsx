'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaOptionListItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthOptionListItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthOptionListItem}
        propTypes={{"color":"string","disabled":"boolean","filtered":"boolean","focusable":"boolean","hasDivider":"boolean","href":"string","icon":"string","isVisible":"boolean","itemTabIndex":"number","selected":"boolean","text":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaOptionListItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaOptionListItem;
