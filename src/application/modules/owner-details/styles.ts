import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    paddingHorizontal: 16,
  },

  headerContent: {
    gap: 16,
    flex: 1,
  },

  header: {
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: theme.colors.primary.light,
  },

  contentList: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },

  wrapperList: {
    gap: 16,
    alignSelf: "flex-start",
  },
}));
