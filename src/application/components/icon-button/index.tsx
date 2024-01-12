import React from "react";
import { Button } from "@components/base/button";
import { TouchableOpacityProps } from "react-native";

interface IconButtonProps extends TouchableOpacityProps {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, ...rest }: IconButtonProps) => (
  <Button {...rest}>{icon}</Button>
);
