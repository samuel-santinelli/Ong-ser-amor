import { View, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation, Icon, Avatar } from "react-native-paper";
import React, { useLayoutEffect } from "react";

const Tab = createBottomTabNavigator();

const CustomHeader = ({ backgroundColor }) => {
  return (
    <View style={[styles.headerContainer, {  backgroundColor: backgroundColor }]}>
      <Avatar.Text size={36} label="UN" style={styles.avatar} /> 
      <Text style={styles.headerTitle}></Text>
      <Icon source="bell" size={28} style={styles.notificationIcon} />
    </View>
  );
};

const DetailsScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    // Define a cor do cabeçalho de acordo com a rota ativa
    const routeName = route.name;
    let backgroundColor = "#FFD700"; // Cor padrão

    if (routeName === "Home") {
      backgroundColor = "#FFD700";
    } else if (routeName === "Donations") {
      backgroundColor = "#09BAE1";
    } else if (routeName === "Tasks") {
      backgroundColor = "#4B0082";
    } else if (routeName === "Profile") {
      backgroundColor = "#FF007A";
    }

    navigation.setOptions({
      headerTitle: () => <CustomHeader backgroundColor={backgroundColor} />,
    });
  }, [navigation, route.name]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#FFD700" }, // Estilo fixo inicial do header
        headerTitle: () => <CustomHeader backgroundColor="#FFD700" />,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
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
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home-circle" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Donations"
        component={DonationsScreen}
        options={{
          tabBarLabel: "Doações",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="hand-coin" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="calendar-check" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account-circle" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text >Home</Text>
    </View>
  );
}

function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text >Settings!</Text>
    </View>
  );
}

function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text >Task!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text >Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",    
    width: "100%",
  },
  avatar: {
    backgroundColor: "#0003", // Cor do avatar
  },
  headerTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: "center", // Centraliza o texto
  },
  notificationIcon: {
    marginRight: 10, // Espaço à direita do ícone
  },
});

export default DetailsScreen;