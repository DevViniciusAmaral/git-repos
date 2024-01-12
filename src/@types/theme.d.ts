import { AppThemes } from "@styles/AppTheme";
import { breakpoints } from "@styles/Breakpoints";

type Themes = typeof AppThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends Themes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
