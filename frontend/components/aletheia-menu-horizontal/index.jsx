'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMenuHorizontal = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMenuHorizontal }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMenuHorizontal}
        propTypes={{"athAriaLabel":"string","hasDivider":"boolean","items":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMenuHorizontal';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMenuHorizontal;
