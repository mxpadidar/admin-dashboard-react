import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface QueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
