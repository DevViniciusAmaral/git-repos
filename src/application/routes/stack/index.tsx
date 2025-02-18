import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./StackParamList";
import { BottomTabsNavigator } from "../bottom-tabs";
import { OwnerDetails } from "@/application/modules/owner-details";

const { Navigator, Screen } = createStackNavigator<StackParamList>();

export const StackNavigator = () => (
  <Navigator
    id={undefined}
    initialRouteName="BottomTabsNavigator"
    screenOptions={{ headerShown: false }}
  >
    <Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
    <Screen name="OwnerDetails" component={OwnerDetails} />
  </Navigator>
);
