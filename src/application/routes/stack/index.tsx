import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./StackParamList";
import { BottomTabsNavigator } from "../bottom-tabs";

const { Navigator, Screen } = createStackNavigator<StackParamList>();

export const StackNavigator = () => (
  <Navigator id={undefined} screenOptions={{ headerShown: false }}>
    <Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
  </Navigator>
);
