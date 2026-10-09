'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderMobileSidebarItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderMobileSidebarItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderMobileSidebarItem}
        propTypes={{"hasDivider":"boolean","isSearchButton":"boolean","searchButtonId":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderMobileSidebarItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderMobileSidebarItem;
