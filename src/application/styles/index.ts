import { AppThemes } from "./AppTheme";
import { breakpoints } from "./Breakpoints";
import { UnistylesRegistry } from "react-native-unistyles";

UnistylesRegistry.addBreakpoints(breakpoints).addThemes(AppThemes).addConfig({
  adaptiveThemes: true,
  initialTheme: "dark",
});
