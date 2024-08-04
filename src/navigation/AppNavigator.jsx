import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotMyPassword from "../screens/ForgotMyPasswordScreen";

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
            headerShown: false,
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
            headerShown: false,
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
            headerShown: true,
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
            headerShown: true,
            headerTitle: "",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Montserrat-SemiBold",
            },
          }}
          name="Register"
          component={RegisterScreen}
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
          name="Forgot my password"
          component={ForgotMyPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
