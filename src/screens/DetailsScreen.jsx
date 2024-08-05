import { View, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, Icon } from 'react-native-paper';
import { getToken } from '../services/token/TokenManager';


const Tab = createBottomTabNavigator();
const DetailsScreen = () => {  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar-check" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Donations"
        component={DonationsScreen}
        options={{
          tabBarLabel: 'Doações',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar-check" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarLabel: 'Atividades',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar-check" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar-check" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Home</Text>
    </View>
  );
}

function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Task!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailsScreen;
