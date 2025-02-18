import React from "react";
import { TouchableOpacity, View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Settings, Star } from "lucide-react-native";

export const BottomMenu = ({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const icons = { Home: Home, Favorites: Star, Settings: Settings };

  const menuList = Object.keys(descriptors).map((key) => ({
    name: descriptors[key]?.route?.name,
    icon: icons[descriptors[key]?.route?.name],
  }));

  return (
    <View style={styles.container}>
      {menuList.map(({ name, icon: Icon }, index) => {
        const isActive = state.index === index;
        const color = isActive ? theme.colors.text : theme.colors.primary.dark;
        return (
          <TouchableOpacity
            key={name}
            activeOpacity={1}
            style={styles.button}
            onPress={() => navigation.navigate(name)}
          >
            <Icon size={24} color={color} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
