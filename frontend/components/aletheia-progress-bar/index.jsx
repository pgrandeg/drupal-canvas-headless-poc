'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaProgressBar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthProgressBar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthProgressBar}
        propTypes={{"athAriaLabel":"string","infinite":"boolean","labelAlignment":"string","labelLeft":"string","labelRight":"string","max":"number","min":"number","value":"number","valueText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaProgressBar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaProgressBar;
