import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      // retry(failureCount, error) {
      //   const status = (error as Response)?.status;
      //   if (`${status}`.startsWith("4")) {
      //     return false;
      //   }
      //   return failureCount < 3;
      // },
    },
  },
});

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
