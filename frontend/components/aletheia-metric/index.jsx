'use client';

import dynamic from 'next/dynamic';
import AletheiaElement from '@/lib/aletheia/element';

const AletheiaMetric = dynamic(
  () => import('@/lib/aletheia/client-components').then(({ AthMetric }) => {
    const Component = (props) => (
      <AletheiaElement
        {...props}
        component={AthMetric}
        propTypes={{"currentLabel":"string","direction":"string","endLabel":"string","highAriaLabel":"string","lowAriaLabel":"string","midAriaLabel":"string","startLabel":"string","unit":"string","value":"string"}}
        slotNames={[]}
        slotTextProp={undefined}
        slotTextDefault={undefined}
      />
    );
    Component.displayName = 'AletheiaMetric';
    return Component;
  }),
  { ssr: false },
);

export default AletheiaMetric;
