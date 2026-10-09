'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFileListItem = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFileListItem }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFileListItem}
        propTypes={{"feedback":"string","feedbackText":"string","hasDelete":"boolean","hasDownload":"boolean","hasIcon":"boolean","inProgress":"boolean","loadingText":"string","name":"string","progress":"number","progressbarAriaLabel":"string","size":"number","value":"string"}}
        slotNames={[{ propName: "content", nativeName: "content" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFileListItem';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFileListItem;
