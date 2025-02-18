import { appThemes } from "@/application/theme/AppThemes";

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
