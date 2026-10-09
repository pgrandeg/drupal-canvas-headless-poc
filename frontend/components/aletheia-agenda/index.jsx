'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAgenda = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAgenda }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAgenda}
        propTypes={{"alphabetAriaLabel":"string","alphabetModeAriaLive":"string","alphabetModeButtonAriaLabel":"string","disabled":"boolean","found":"number","hasAlphabet":"boolean","headingLevel":"number","headingText":"string","height":"string","initialsAriaLabel":"string","label":"string","orientation":"string","placeholder":"string","resultsAriaLabel":"string","resultsAriaLive":"string","searchInputAriaLabel":"string","searchModeAriaLive":"string","searchModeButtonAriaLabel":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAgenda';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAgenda;
