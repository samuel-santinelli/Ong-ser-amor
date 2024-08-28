import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

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
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Montserrat-SemiBold",
            },
          }}
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
          name="Login"
          component={LoginScreen}
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
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
