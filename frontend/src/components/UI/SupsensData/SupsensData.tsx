import { FC, PropsWithChildren, Suspense } from 'react';

import { DefinedUseQueryResult } from '@tanstack/react-query';
import FallbackData from '../FallbackData/FallbackData';

const SupsensData: FC<PropsWithChildren<Partial<DefinedUseQueryResult>>> = ({
  children,
  ...props
}) => <Suspense fallback={<FallbackData {...props} />}>{children}</Suspense>;

export default SupsensData;
