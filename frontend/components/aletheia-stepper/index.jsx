'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaStepper = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthStepper }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthStepper}
        propTypes={{"ariaLiveMessage":"string","athAriaLabel":"string","athRole":"string","clickable":"boolean","collapseLabel":"string","completedLabel":"string","errorLabel":"string","expandLabel":"string","headingIcon":"string","headingText":"string","orientation":"string","readonly":"boolean","size":"string","startFrom":"number"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaStepper';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaStepper;
