import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = ({ ...rest }: TouchableOpacityProps) => (
  <TouchableOpacity activeOpacity={0.8} {...rest} />
);
