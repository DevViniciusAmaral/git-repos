import React, { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RepositoryProvider } from "../contexts/RepositoryContext";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <RepositoryProvider>{children}</RepositoryProvider>
    </SafeAreaProvider>
  );
}
