'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalSearch = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalSearch }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalSearch}
        propTypes={{"placeholder":"string","searchAriaLabel":"string"}}
        slotNames={[{ propName: "contentLeft", nativeName: "content-left" }, { propName: "contentRight", nativeName: "content-right" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalSearch';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalSearch;
