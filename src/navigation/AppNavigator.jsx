import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotMyPassword from "../screens/ForgotMyPasswordScreen";
import useAuthNavigation from "../services/auth/useAuthNavigation";
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderRight = ({ navigation }) => (
  <IconButton
    icon="bell"
    iconColor="white"
    size={28}
    style={{ marginRight: 10 }}
    onPress={() => navigation.openDrawer()}
  />
);

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#ff007a",
        },
        headerShown: false,
        headerTintColor: "#fff",
        headerRight: () => <CustomHeaderRight navigation={navigation} />,
        headerTitle: "",
      })}
    >
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Details"
        component={AuthenticatedStack}
        options={{
          headerTitle: "",
        }}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const { isAuthenticated } = useAuthNavigation();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <DrawerNavigator /> // Drawer como principal para usuários autenticados
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#ff007a",
            },
            headerShown: false,
            headerTintColor: "#fff",
            headerRight: () => <CustomHeaderRight navigation={navigation} />,
            headerTitle: "",
          })}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
