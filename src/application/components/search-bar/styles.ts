import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    height: 40,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: theme.colors.border,
  },

  button: (isEmpty: boolean) => ({
    borderRadius: 8,
    marginRight: -8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: isEmpty
      ? theme.colors.placeholder
      : theme.colors.secondary,
  }),
}));
