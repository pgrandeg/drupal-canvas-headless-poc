'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaButtonCopy = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthButtonCopy }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthButtonCopy}
        propTypes={{"copiedAriaLiveText":"string","copiedTooltipText":"string","copyText":"string","copyTooltipText":"string","size":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaButtonCopy';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaButtonCopy;
