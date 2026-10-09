'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAppListAction = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAppListAction }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAppListAction}
        propTypes={{"behavior":"string","hasDetail":"boolean","label":"string","selectable":"boolean","subtitle":"string","value":"string"}}
        slotNames={[{ propName: "leading", nativeName: "leading" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAppListAction';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAppListAction;
