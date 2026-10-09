'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAgendaItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAgendaItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAgendaItem}
        propTypes={{"initial":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAgendaItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAgendaItem;
