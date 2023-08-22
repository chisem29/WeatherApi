import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { FC, PropsWithChildren } from 'react';

const QueryProvider: FC<{ client: QueryClient } & PropsWithChildren> = ({
  client,
  children,
}) => { 
  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
};

export default QueryProvider;
