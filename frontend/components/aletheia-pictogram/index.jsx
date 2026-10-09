'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaPictogram = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthPictogram }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthPictogram}
        propTypes={{"ariaLabel":"string","ariaLabelledby":"string","name":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaPictogram';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaPictogram;
