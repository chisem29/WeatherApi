import { FC, PropsWithChildren, Suspense } from 'react';

import FallbackData from '../FallbackData/FallbackData';

const SupsensData: FC<PropsWithChildren> = ({
  children,
}) => (
  <Suspense fallback={<FallbackData />}>
    {children}
  </Suspense>
);

export default SupsensData;
