import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "@screens/home";
import { RepositoryDetails } from "@screens/repository-details";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RepositoryDetails" component={RepositoryDetails} />
    </Stack.Navigator>
  );
}
