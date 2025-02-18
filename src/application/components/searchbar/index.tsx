import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { TextInput, TextInputProps } from "../text-input";
import { Search } from "lucide-react-native";
import { Button } from "../button";

interface SearchbarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  onSearch?: () => void;
}

export const Searchbar = ({
  containerStyle,
  style,
  onSearch,
  ...rest
}: SearchbarProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput {...rest} style={[styles.input, style]} />
      </View>

      {!!onSearch && (
        <Button style={styles.button} onPress={onSearch}>
          <Search size={20} color={theme.colors.primary.default} />
        </Button>
      )}
    </View>
  );
};
