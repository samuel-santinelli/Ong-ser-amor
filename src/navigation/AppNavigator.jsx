import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotMyPassword from "../screens/ForgotMyPasswordScreen";
import useAuthNavigation from "../services/auth/useAuthNavigation";
import { Avatar, Button } from "react-native-paper";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuthNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "Details" : "Login"}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff007a",
          },
          headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontFamily: "Montserrat-SemiBold",
          // },
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="Details"
              component={DetailsScreen}              
              options={{
                headerShown: false,                
                headerLeft: () => {
                  <Avatar.Text size={24} label="XD" />;
                },
                headerRight: () => {
                  <Avatar.Text size={24} label="SA"/>
                }
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Forgot my password"
              component={ForgotMyPassword}
              options={{ headerShown: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
