'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaDropdownOption = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthDropdownOption }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthDropdownOption}
        propTypes={{"disabled":"boolean","icon":"string","name":"string","optionGroup":"boolean","selected":"boolean","selectedAriaLabel":"string","text":"string","value":"string"}}
        slotNames={[{ propName: "leftAsset", nativeName: "left-asset" }, { propName: "rightAsset", nativeName: "right-asset" }, { propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaDropdownOption';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaDropdownOption;
