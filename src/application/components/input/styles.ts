import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.border,
  },
  input: { flex: 1 },
}));
