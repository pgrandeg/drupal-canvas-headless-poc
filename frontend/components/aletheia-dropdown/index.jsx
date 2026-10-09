'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaDropdown = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthDropdown }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthDropdown}
        propTypes={{"announceResultText":"string","disabled":"boolean","dropdownAriaLabel":"string","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","label":"string","multiselect":"boolean","name":"string","nochipsText":"string","noresultText":"string","open":"boolean","overlayMaxHeight":"string","placeholder":"string","readonly":"boolean","required":"boolean","search":"boolean","searchAriaLabel":"string","searchPlaceholder":"string","showChips":"boolean","size":"string","tooltipText":"string","tooltipWidth":"number","value":"string","width":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaDropdown';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaDropdown;
