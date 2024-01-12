import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "@screens/home";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
