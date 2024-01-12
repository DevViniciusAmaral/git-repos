import React from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput, TextInputProps } from "@components/base/text-input";

interface InputProps extends TextInputProps {
  containerStyle: StyleProp<ViewStyle>;
}

export const Input = ({ containerStyle, ...rest }: InputProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[containerStyle, styles.container]}>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};
