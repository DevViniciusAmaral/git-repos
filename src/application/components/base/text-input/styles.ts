import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  input: (fontSize: number) => ({
    flex: 1,
    fontSize,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  }),
}));
