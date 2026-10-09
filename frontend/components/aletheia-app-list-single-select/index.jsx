'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppListSingleSelect = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppListSingleSelect }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppListSingleSelect}
        propTypes={{"appareance":"string","label":"string","selected":"boolean"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppListSingleSelect';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppListSingleSelect;
