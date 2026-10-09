'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSearchSuggestedItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSearchSuggestedItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSearchSuggestedItem}
        propTypes={{"text":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSearchSuggestedItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSearchSuggestedItem;
