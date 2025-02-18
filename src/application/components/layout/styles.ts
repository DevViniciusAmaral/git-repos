import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (paddingTop: number, paddingBottom: number) => ({
    flexGrow: 1,
    paddingTop,
    paddingBottom,
    backgroundColor: theme.colors.primary.default,
  }),

  content: {
    flex: 1,
  },

  default: {
    backgroundColor: theme.colors.primary.default,
  },
}));