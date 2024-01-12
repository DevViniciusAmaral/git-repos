import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
}));
