import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: theme.colors.border,
  },

  horizontalContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
}));
