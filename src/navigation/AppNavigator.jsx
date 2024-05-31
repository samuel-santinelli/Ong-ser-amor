import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#ff007a",
            },
            headerTintColor: "#ff007a",
            headerTitleStyle: {
              fontFamily: "Montserrat-SemiBold",
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#ff007a",
            },
            headerTintColor: "#ff007a",
            headerTitleStyle: {
              fontFamily: "Montserrat-SemiBold",
            },
          }}
          na
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#ff007a",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Montserrat-SemiBold",
            },
          }}
          na
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
