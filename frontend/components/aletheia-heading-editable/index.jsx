'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaHeadingEditable = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthHeadingEditable }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthHeadingEditable}
        propTypes={{"cancelLiveMessage":"string","cancelOnBlur":"boolean","color":"string","editButtonAriaLabel":"string","headingLevel":"number","headingSize":"string","inputAriaLabel":"string","saveLiveMessage":"string","text":"string","textButtonCancel":"string","textButtonSave":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaHeadingEditable';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaHeadingEditable;
