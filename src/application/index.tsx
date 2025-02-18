import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainNavigator } from "./routes";

export const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <MainNavigator />
    </SafeAreaProvider>
  );
};
