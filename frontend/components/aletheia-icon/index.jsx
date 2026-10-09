'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaIcon = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthIcon }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthIcon}
        propTypes={{"ariaLabel":"string","ariaLabelledby":"string","color":"string","icon":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaIcon';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaIcon;
