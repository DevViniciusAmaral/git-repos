import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
  family?: "regular" | "medium" | "bold";
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ size = 14, family = "regular", style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const fontFamily = {
      regular: theme.fonts.regular,
      medium: theme.fonts.medium,
      bold: theme.fonts.bold,
    }[family];

    return (
      <RNTextInput
        ref={ref}
        {...rest}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        style={[styles.input(size, fontFamily), style]}
        placeholderTextColor={theme.colors.primary.dark}
      />
    );
  }
);
