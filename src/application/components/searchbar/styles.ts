import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 8,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    flex: 1,
    gap: 16,
    height: 48,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: theme.colors.primary.light,
  },

  input: {
    flex: 1,
  },

  button: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.text,
  },
}));
