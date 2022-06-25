import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

export const QueryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
