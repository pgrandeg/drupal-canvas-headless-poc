'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaFileUploader = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthFileUploader }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthFileUploader}
        propTypes={{"accept":"string","assignTo":"string","capture":"string","deleteAllButtonText":"string","description":"string","disabled":"boolean","feedback":"string","feedbackText":"string","fileListAriaLabel":"string","hasIcon":"boolean","headingText":"string","helperText":"string","hideButtonDeleteAll":"boolean","hideFileList":"boolean","hideRequired":"boolean","itemFeedbackText":"string","label":"string","maxSize":"number","multiple":"boolean","required":"boolean","searchText":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaFileUploader';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaFileUploader;
