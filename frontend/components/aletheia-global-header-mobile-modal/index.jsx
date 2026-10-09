'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaGlobalHeaderMobileModal = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthGlobalHeaderMobileModal }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthGlobalHeaderMobileModal}
        propTypes={{"modalId":"string","triggerId":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaGlobalHeaderMobileModal';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaGlobalHeaderMobileModal;
