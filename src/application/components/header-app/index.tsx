import React, { useCallback, useMemo } from "react";
import { View } from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "@components/base/text";
import { IconButton } from "@components/icon-button";
import { Moon, Sun } from "lucide-react-native";

export const HeaderApp = () => {
  const { styles, theme } = useStyles(stylesheet);

  const appTheme = useMemo(
    () => UnistylesRuntime.themeName,
    [UnistylesRuntime.themeName]
  );

  const toggleTheme = () =>
    UnistylesRuntime.setTheme(appTheme === "light" ? "dark" : "light");

  const IconTheme = () => {
    const Icon = appTheme === "light" ? Moon : Sun;
    const color =
      appTheme === "light" ? theme.colors.placeholder : theme.colors.warning;

    return <Icon size={20} color={color} />;
  };

  return (
    <View style={styles.container}>
      <Text size={16} style={styles.mediumText}>
        Git{" "}
        <Text size={16} style={styles.boldText}>
          Repos
        </Text>
      </Text>

      <IconButton icon={<IconTheme />} onPress={toggleTheme} />
    </View>
  );
};
