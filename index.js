// App.tsx
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PaperProvider,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
const Stack = createStackNavigator();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function App() {
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  console.log("primary color", primaryColor);
  

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: primaryColor,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
