'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppCardSelect = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppCardSelect }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppCardSelect}
        propTypes={{"contentCustom":"boolean","description":"string","emphasis":"string","hasContent":"boolean","hasDescription":"boolean","hasThumbnail":"boolean","label":"string","selected":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }, { propName: "thumbnail", nativeName: "thumbnail" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppCardSelect';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppCardSelect;
