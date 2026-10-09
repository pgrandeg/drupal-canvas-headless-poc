'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSectionTitle = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSectionTitle }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSectionTitle}
        propTypes={{"collapsable":"boolean","collapseTarget":"string","color":"string","headingLevel":"number","headingOverline":"number","headingSize":"string","headingText":"string","icon":"string","overline":"string","pictogram":"string","tooltip":"string","tooltipLabel":"string","type":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSectionTitle';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSectionTitle;
