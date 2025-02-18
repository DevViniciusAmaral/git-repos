import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text, TextProps } from "../text";

interface ButtonProps extends TouchableOpacityProps {
  textProps?: TextProps;
}

export const Button = ({
  style,
  children,
  textProps,
  ...rest
}: ButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity
      activeOpacity={1}
      {...rest}
      style={[styles.button, style]}
    >
      <Text {...textProps}>{children}</Text>
    </TouchableOpacity>
  );
};
