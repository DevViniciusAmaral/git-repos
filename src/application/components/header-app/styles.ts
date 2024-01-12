import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderBottomColor: theme.colors.border,
  },

  boldText: {
    fontFamily: theme.fonts.bold,
  },

  mediumText: {
    fontFamily: theme.fonts.medium,
  },
}));
