import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// NAVIGATORS
import StackNavigator from "./stack-navigator";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
