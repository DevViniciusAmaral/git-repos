import React from "react";
import { stylesheet } from "./styles";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { Text } from "@/application/components/text";
import { Layout } from "@/application/components/layout";
import { View } from "react-native";
import { Button } from "@/application/components/button";
import { Moon, Sun } from "lucide-react-native";
import { storage } from "@/infrastructure/storage";

export const Settings = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { themeName, setTheme } = UnistylesRuntime;
  const isDark = themeName === "dark";

  const ThemeIcon = isDark ? Sun : Moon;

  const toggleTheme = () => {
    const theme = themeName === "light" ? "dark" : "light";
    storage.set("theme", theme);
    setTheme(theme);
  };

  return (
    <Layout
      style={styles.container}
      header={
        <View style={styles.header}>
          <Text size={24} family="bold">
            Configurações
          </Text>
        </View>
      }
    >
      <Button onPress={toggleTheme} style={styles.menu}>
        <Text>Alterar tema</Text>
        <ThemeIcon size={24} color={theme.colors.text} />
      </Button>
    </Layout>
  );
};
