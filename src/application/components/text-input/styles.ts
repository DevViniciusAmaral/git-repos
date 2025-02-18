import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  input: (size: number, fontFamily: string) => ({
    fontFamily,
    fontSize: PixelRatio.getFontScale() * size,
    color: theme.colors.text,
  }),
}));
