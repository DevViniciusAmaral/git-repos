import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  text: (fontSize: number) => ({
    fontSize,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  }),
}));
