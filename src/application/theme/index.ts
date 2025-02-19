import { storage } from "@/infrastructure/storage";
import { appThemes } from "./AppThemes";
import { UnistylesRegistry, UnistylesThemes } from "react-native-unistyles";

UnistylesRegistry.addThemes(appThemes).addConfig({
  initialTheme:
    (storage.getString("theme") as keyof UnistylesThemes) ?? "light",
  adaptiveThemes: true,
});
