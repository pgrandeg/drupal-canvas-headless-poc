'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaCardHeader = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthCardHeader }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthCardHeader}
        propTypes={{"date":"string","headingText":"string","overline":"string","subtitle":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaCardHeader';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaCardHeader;
