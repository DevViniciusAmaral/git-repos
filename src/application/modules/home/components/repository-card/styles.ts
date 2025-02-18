import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
  },

  horizontal: {
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: theme.colors.primary.light,
  },

  content: {
    flex: 1,
  },

  label: {
    color: theme.colors.primary.dark,
  },

  divider: (isLast: boolean) => ({
    width: "85%",
    alignSelf: "flex-end",
    borderBottomWidth: isLast ? 0 : 1,
    borderBottomColor: theme.colors.primary.light,
  }),
}));
