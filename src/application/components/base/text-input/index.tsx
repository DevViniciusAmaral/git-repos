import { stylesheet } from "./styles";
import React, { forwardRef, useMemo } from "react";
import { useStyles } from "react-native-unistyles";
import {
  PixelRatio,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ size = 14, style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);
    const fontSize = useMemo(() => PixelRatio.getFontScale() * size, [size]);

    return (
      <RNTextInput
        ref={ref}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        style={[style, styles.input(fontSize)]}
        placeholderTextColor={theme.colors.placeholder}
        {...rest}
      />
    );
  }
);
