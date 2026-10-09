'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputExchange = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputExchange }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputExchange}
        propTypes={{"counter":"boolean","currency":"string","disabled":"boolean","feedback":"string","hasClear":"boolean","hasHelperText":"boolean","hasLabel":"boolean","helperText":"string","iconPositionLeft":"boolean","iconPositionRight":"boolean","label":"string","readonly":"boolean","size":"string","state":"string","type":"string","value":"string"}}
        slotNames={[{ propName: "iconLeft", nativeName: "icon-left" }, { propName: "iconRight", nativeName: "icon-right" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputExchange';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputExchange;
