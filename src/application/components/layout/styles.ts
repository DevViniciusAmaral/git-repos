import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (paddingTop) => ({
    flex: 1,
    paddingTop,
    backgroundColor: theme.colors.primary,
  }),

  contentView: {
    flex: 1,
  },
}));
