import React, { useMemo, useState } from "react";
import { stylesheet } from "./styles";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { StyleProp, View, ViewProps } from "react-native";
import { TextInput, TextInputProps } from "@components/base/text-input";
import { IconButton } from "@components/icon-button";
import { Search } from "lucide-react-native";

interface SearchBarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewProps>;
  onSearch: () => void;
}

export const SearchBar = ({
  containerStyle,
  onSearch,
  ...rest
}: SearchBarProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const [inputValue, setInputValue] = useState("");

  const appTheme = useMemo(
    () => UnistylesRuntime.themeName,
    [UnistylesRuntime.themeName]
  );

  const iconColor =
    appTheme === "light" ? theme.colors.primary : theme.colors.text;

  return (
    <View style={[containerStyle, styles.container]}>
      <TextInput
        {...rest}
        onChange={({ nativeEvent: { text } }) => setInputValue(text)}
      />
      <IconButton
        style={styles.button(inputValue?.length === 0)}
        icon={<Search size={20} color={iconColor} />}
        onPress={onSearch}
      />
    </View>
  );
};
