'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaInputPassword = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthInputPassword }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthInputPassword}
        propTypes={{"autocomplete":"string","autofocus":"boolean","counter":"boolean","counterLabel":"string","disabled":"boolean","feedback":"string","feedbackText":"string","helperText":"string","hideRequired":"boolean","inputAriaLabel":"string","inputTabindex":"string","label":"string","labelHidePassword":"string","labelShowPassword":"string","maxlength":"number","name":"string","pattern":"string","placeholder":"string","readonly":"boolean","required":"boolean","size":"string","submitOnEnter":"boolean","tooltipText":"string","tooltipWidth":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaInputPassword';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaInputPassword;
