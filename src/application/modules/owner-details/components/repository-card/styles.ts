import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignSelf: "flex-start",
    justifyContent: "space-between",
    backgroundColor: theme.colors.primary.light,
  },

  label: {
    color: theme.colors.primary.dark,
  },

  linkButton: {
    padding: 4,
    marginTop: 8,
    alignSelf: "flex-end",
  },
}));
