import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.border,
  },

  horizontalContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  horizontalWrapper: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  language: {
    color: theme.colors.secondary,
  },

  label: (secondary?: boolean) => ({
    fontFamily: secondary ? theme.fonts.medium : theme.fonts.bold,
  }),
}));
