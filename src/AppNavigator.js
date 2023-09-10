import { View, Text } from "react-native";
import React, { useEffect } from "react";
//creates a container which will handle navigation
import { NavigationContainer } from "@react-navigation/native";
//creates a stack of screens
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import BookAppointment from "./screens/BookAppointment";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
