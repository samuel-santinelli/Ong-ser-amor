// App.tsx
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
const Stack = createStackNavigator();
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

export default function App() {
  const theme = {
    ...DefaultTheme,
    fonts: {
      regular: {
        fontFamily: 'Montserrat-Regular'
      },
      medium: {
        fontFamily: 'Montserrat-Medium'
      },
      light: {
        fontFamily: 'Montserrat-Light'
      },
      thin: {
        fontFamily: 'Montserrat-Thin'
      },
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}