import { stylesheet } from "./styles";
import React, { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { useStyles } from "react-native-unistyles";
import { ScrollView, ScrollViewProps, View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  paddingTopEnabled?: boolean;
}

export const Layout = ({
  header,
  footer,
  children,
  scrollEnabled = false,
  paddingTopEnabled = false,
  ...rest
}: LayoutProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopEnabled ? top + 8 : 0;

  const { styles, theme } = useStyles(stylesheet);

  const statusBarStyle = useMemo(
    () => (UnistylesRuntime.themeName === "light" ? "dark" : "light"),
    [UnistylesRuntime.themeName]
  );

  return (
    <View style={styles.container(paddingTop)}>
      <StatusBar
        style={statusBarStyle}
        backgroundColor={theme.colors.primary}
      />

      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          {...rest}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={styles.contentView} {...rest}>
          {children}
        </View>
      )}

      {footer && <>{footer}</>}
    </View>
  );
};
