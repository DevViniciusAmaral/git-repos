import React from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import {
  PixelRatio,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";

interface TextProps extends RNTextProps {
  size?: number;
}

export const Text = ({ size = 14, style, ...rest }: TextProps) => {
  const { styles } = useStyles(stylesheet);
  const fontSize = PixelRatio.getFontScale() * size;

  return <RNText style={[styles.text(fontSize), style]} {...rest} />;
};
