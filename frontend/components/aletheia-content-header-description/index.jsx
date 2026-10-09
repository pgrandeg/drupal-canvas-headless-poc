'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaContentHeaderDescription = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthContentHeaderDescription }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthContentHeaderDescription}
        propTypes={{"buttonAriaLabel":"string","description":"string","hasButton":"boolean","hasButtonCopy":"boolean","icon":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaContentHeaderDescription';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaContentHeaderDescription;
