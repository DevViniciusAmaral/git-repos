import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/application/modules/home";
import { Favorites } from "@/application/modules/favorites";
import { Settings } from "@/application/modules/settings";
import { BottomTabsParamList } from "./BottomTabsParamList";
import { useStyles } from "react-native-unistyles";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Star,
} from "lucide-react-native";
import { BottomMenu } from "@/application/components/bottom-menu";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  const { theme } = useStyles();

  return (
    <Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.primary.dark,
      }}
      tabBar={(props) => <BottomMenu {...props} />}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favoritos",
        }}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configurações",
        }}
      />
    </Navigator>
  );
};
