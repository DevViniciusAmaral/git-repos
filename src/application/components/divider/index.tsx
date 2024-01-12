import React from "react";
import { stylesheet } from "./styles";
import { View, ViewProps } from "react-native";
import { useStyles } from "react-native-unistyles";

export const Divider = ({ ...rest }: ViewProps) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.divider} {...rest} />;
};
