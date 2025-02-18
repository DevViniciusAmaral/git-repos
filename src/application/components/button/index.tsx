import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const Button = ({ style, ...rest }: TouchableOpacityProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity
      activeOpacity={1}
      {...rest}
      style={[styles.button, style]}
    />
  );
};
