import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 24,
    padding: 16,
  },

  header: {
    padding: 16,
  },

  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  horizontalContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  label: (secondary?: boolean) => ({
    fontFamily: secondary ? theme.fonts.regular : theme.fonts.bold,
  }),
}));
