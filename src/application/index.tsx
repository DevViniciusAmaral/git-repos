import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/text";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text size={40} family="bold">
          Open up App.js to start working on your app!
        </Text>
      </Layout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
