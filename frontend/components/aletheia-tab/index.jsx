'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaTab = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthTab }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthTab}
        propTypes={{"disabled":"boolean","icon":"string","iconAriaLabel":"string","label":"string","navigationData":"string","selected":"boolean"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaTab';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaTab;
