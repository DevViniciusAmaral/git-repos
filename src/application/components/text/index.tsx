import React, { forwardRef } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export interface TextProps extends RNTextProps {
  size?: number;
  family?: "regular" | "medium" | "bold";
}

export const Text = forwardRef<any, TextProps>(
  ({ size = 14, family = 'regular', style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const fontFamily = {
      regular: theme.fonts.regular,
      medium: theme.fonts.medium,
      bold: theme.fonts.bold,
    }[family];

    return (
      <RNText
        ref={ref}
        {...rest}
        style={[styles.text(size, fontFamily), style]}
      />
    );
  }
);
