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
import DefaultSpinner from "../components/DefaultSpinner";
import ConfirmOTPCode from "../screens/ConfirmOTPCode";
import { Easing } from "react-native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuthNavigation(true);  

  if (isAuthenticated === null) {
    return (
      <DefaultSpinner/>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={isAuthenticated ? "Details" : "Home"}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff007a",
        },
        headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontFamily: "Montserrat-SemiBold",
        // },
        animationEnabled: true,  // Habilitar animação entre telas
        gestureEnabled: true,    // Habilitar gesto de "voltar"
        gestureDirection: "horizontal",  // Define a direção da animação (horizontal/vertical)

        // Configuração de animação personalizada
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 550,   // Duração da animação ao abrir
              easing: Easing.out(Easing.poly(4)),  // Efeito de suavização da animação
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 550,   // Duração da animação ao fechar
              easing: Easing.in(Easing.poly(4)),
            },
          },
        },
        // Estilo de animação
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
 

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
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="Forgot my password"
            component={ForgotMyPassword}
            options={{ headerShown: true, headerTitle: ""}}
          />
          <Stack.Screen
            name="Confirm OTP Code"
            component={ConfirmOTPCode}
            options={{ headerShown: true, headerTitle: ""}}
          />
        </>
    
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;