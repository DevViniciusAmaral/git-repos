import { appThemes } from "./AppThemes";
import { UnistylesRegistry } from "react-native-unistyles";

UnistylesRegistry.addThemes(appThemes).addConfig({
  initialTheme: "light",
  adaptiveThemes: true,
});
