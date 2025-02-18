import React from "react";
import { stylesheet } from "./styles";
import {
  View,
  ViewStyle,
  StyleProp,
  ScrollView,
  ScrollViewProps,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  enablePaddingTop?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Layout = ({
  style,
  header,
  footer,
  children,
  headerStyle,
  footerStyle,
  scrollEnabled = false,
  containerStyle,
  enablePaddingTop = true,
  ...rest
}: LayoutProps) => {
  const { top, bottom } = useSafeAreaInsets();
  const { styles, theme } = useStyles(stylesheet);

  const isAndroid = Platform.OS === "android";
  const behavior = isAndroid ? "height" : "padding";
  const paddingTop = enablePaddingTop ? (isAndroid ? top + 16 : top) : 0;

  return (
    <KeyboardAvoidingView
      enabled
      behavior={behavior}
      style={[styles.container(paddingTop, bottom), containerStyle]}
    >
      <StatusBar style="dark" backgroundColor={theme.colors.primary.default} />

      {header && <View style={[styles.default, headerStyle]}>{header}</View>}

      {scrollEnabled ? (
        <ScrollView
          style={style}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          {...rest}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, style]} {...rest}>
          {children}
        </View>
      )}

      {footer && <View style={[styles.default, footerStyle]}>{footer}</View>}
    </KeyboardAvoidingView>
  );
};