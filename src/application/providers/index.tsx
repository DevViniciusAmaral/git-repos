import React, { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Providers({ children }: PropsWithChildren) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
