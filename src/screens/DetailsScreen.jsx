import { View, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation, Icon, Avatar } from "react-native-paper";
import DefaultView from "../components/DefaultView";
import DefaultLabel from "../components/DefaultLabel";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import { removeToken } from "../services/token/TokenManager";
import { useDispatch } from "react-redux";
import { clearToken } from "../reducers/authSlice";

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
            return (
              <Icon source="home-circle-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="calendar-check-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Donations"
        component={DonationsScreen}
        options={{
          tabBarLabel: "Doações",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="hand-coin-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="account-circle-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text>Atividades</Text>
    </View>
  );
}

function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Doações</Text>
    </View>
  );
}

function ProfileScreen() {
  const dispatch = useDispatch();

  return (
    <DefaultView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar.Text
          label="TS"
          style={{ backgroundColor: "#ff007a" }}
          size={100}
        />
        {/* <Icon size={40} source={"pencil-circle"}/> */}
      </View>
      <DefaultInput
        label={"Nome"}
        mode="outlined"
        secureTextEntry={false}
        autoCorrect={true}
        autoCapitalize={true}
        spellCheck={true}
        keyboardType={"default"}
        // {...register("name", { required: "Nome é obrigatório" })}
        // setValue={setValue}
        // value={watch("name")}
        // error={!!errors.name}
        // ref={nameRef}
        // onChangeText={(text) => {
        //   setValue("name", text);
        //   clearErrors("name");
        // }}
        // onSubmitEditing={() => phoneRef.current.focus()}
        returnKeyType="next"
      />
      {/* {errors.name && (
            <Text style={styles.errorText}>{errors.name.message}</Text>
          )} */}

      <DefaultInput
        label={"Telefone"}
        mode="outlined"
        keyboardType={"numeric"}
        autoCorrect={false}
        autoCapitalize={false}
        spellCheck={false}
        maxLength={15}
        mask={[
          "(",
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        secureTextEntry={false}
        // {...register("phone", { required: "Celular é obrigatório" })}
        // setValue={setValue}
        // value={watch("phone")}
        // error={!!errors.phone}
        // ref={phoneRef}
        // onChangeText={(text) => {
        //   setValue("phone", text);
        //   clearErrors("phone");
        // }}
        // onSubmitEditing={() => emailRef.current.focus()}
        returnKeyType="next"
      />
      {/* {errors.phone && (
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          )} */}

      <DefaultInput
        label={"E-mail"}
        mode="outlined"
        keyboardType={"default"}
        secureTextEntry={false}
        autoCorrect={false}
        autoCapitalize={false}
        spellCheck={false}
        // {...register("email", {
        //   required: "E-mail é obrigatório",
        //   pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
        // })}
        // setValue={setValue}
        // value={watch("email")}
        // error={
        //   !!errors.email ||
        //   responseError === "Este e-mail já foi cadastrado."
        // }
        // ref={emailRef}
        // onChangeText={(text) => {
        //   setValue("email", text);
        //   clearErrors("email");
        //   setResponseError("");
        // }}
        // onSubmitEditing={() => passwordRef.current.focus()}
        returnKeyType="next"
      />
      {/* {(errors.email ||
            responseError === "Este e-mail já foi cadastrado.") && (
            <Text style={styles.errorText}>
              {errors.email ? errors.email.message : responseError}
            </Text>
          )} */}

      <DefaultInput
        label={"Senha"}
        mode="outlined"
        mask={""}
        keyboardType={"default"}
        autoCorrect={false}
        autoCapitalize={false}
        spellCheck={false}
        right={<Text>Alterar senha</Text>}
        // secureTextEntry={showPassword}
        // {...register("password", { required: "Senha é obrigatória" })}
        // setValue={setValue}
        // value={watch("password")}
        // error={!!errors.password}
        // ref={passwordRef}
        // onChangeText={(text) => {
        //   setValue("password", text);
        //   clearErrors("password");
        // }}
        // onSubmitEditing={() => confirmPasswordRef.current.focus()}
        returnKeyType="next"
      />
      {/* {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )} */}
      <View style={{ marginTop: 20, gap: 10 }}>
        <DefaultButton
          title={"Salvar"}
          textColor={"#fff"}
          style={styles.button}
        />
        <DefaultButton
          title={"Logout"}
          icon={"logout"}
          textColor={"#ff007a"}
          style={styles.logout_button}
          onPress={() => dispatch(clearToken())}
        />
      </View>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#ff007a",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  logout_button: {
    borderColor: "#ff007a",
    borderWidth: 2,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  avatar: {
    backgroundColor: "#0003",
  },
  headerTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
  notificationIcon: {
    marginRight: 10,
  },
});

export default DetailsScreen;
