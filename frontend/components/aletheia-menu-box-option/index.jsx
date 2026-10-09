'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuBoxOption = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuBoxOption }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuBoxOption}
        propTypes={{"description":"string","disabled":"boolean","externalLabel":"string","href":"string","icon":"string","rel":"string","target":"string","text":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuBoxOption';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuBoxOption;
