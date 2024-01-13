import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  imageBackground: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.border,
  },
}));
