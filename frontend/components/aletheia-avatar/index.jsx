'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaAvatar = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthAvatar }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthAvatar}
        propTypes={{"ariaLabelledby":"string","avatarName":"string","initials":"string","size":"string","type":"string"}}
        slotNames={[{ propName: "img", nativeName: "img" }]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaAvatar';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaAvatar;
