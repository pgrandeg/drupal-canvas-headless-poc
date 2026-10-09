'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCheckbox = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCheckbox }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCheckbox}
        propTypes={{"ariaLabel":"string","autofocus":"boolean","checked":"boolean","disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","indeterminate":"boolean","label":"string","name":"string","readonly":"boolean","required":"boolean","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCheckbox';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCheckbox;
