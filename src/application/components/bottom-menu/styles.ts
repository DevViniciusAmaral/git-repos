import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: .5,
    borderTopColor: theme.colors.primary.light,
    backgroundColor: theme.colors.primary.default,
  },

  button: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
}));
