'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderMobileSidebar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderMobileSidebar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderMobileSidebar}
        propTypes={{}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderMobileSidebar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderMobileSidebar;
