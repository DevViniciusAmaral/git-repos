import Toast from "react-native-toast-message";
import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RepositoryProvider } from "../contexts/RepositoryContext";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RepositoryProvider>{children}</RepositoryProvider>
      </QueryClientProvider>
      <Toast position="top" visibilityTime={3000} />
    </SafeAreaProvider>
  );
}
