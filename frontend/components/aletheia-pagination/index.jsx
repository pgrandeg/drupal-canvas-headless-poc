'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaPagination = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthPagination }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthPagination}
        propTypes={{"athAriaLabel":"string","currentPage":"number","disabled":"boolean","itemsPerPage":"number","itemsSelector":"string","noEndButtons":"boolean","noItemsCount":"boolean","noItemsSelector":"boolean","noJumpButtons":"boolean","totalItems":"number"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaPagination';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaPagination;
