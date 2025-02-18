import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./StackParamList";
import { Home } from "@/application/modules/home";

const { Navigator, Screen } = createStackNavigator<StackParamList>();

export const StackNavigator = () => (
  <Navigator id={undefined} screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
  </Navigator>
);
