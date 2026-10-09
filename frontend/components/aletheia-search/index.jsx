'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaSearch = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthSearch }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthSearch}
        propTypes={{"clearButtonAriaLabel":"string","deleteAriaLabel":"string","disabled":"boolean","hasClear":"boolean","hideButton":"boolean","itemsListAriaLabel":"string","open":"boolean","placeholder":"string","searchAriaLabel":"string","size":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaSearch';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaSearch;
