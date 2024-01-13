import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.border,
  },

  horizontalContainer: (gap: number) => ({
    gap,
    flexDirection: "row",
    alignItems: "center",
  }),

  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textMedium: {
    fontFamily: theme.fonts.medium,
  },

  label: (secondary?: boolean) => ({
    fontFamily: secondary ? theme.fonts.regular : theme.fonts.medium,
  }),
}));
