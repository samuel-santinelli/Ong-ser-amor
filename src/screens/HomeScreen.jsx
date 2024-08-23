import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DefaultButton from "../components/DefaultButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        width={400}
        height={400}
        source={require("../../assets/imgs/ong_logo.png")}
      />
      <Text style={styles.title}>O amor ganhando forma</Text>
      <DefaultButton
        title="Login"
        style={styles.button}
        mode={"contained"}
        textColor={"#ff007a"}
        onPress={() => navigation.navigate("Login")}
      />
      <DefaultButton
        title="Sou funcionário"
        style={styles.button}
        mode={"contained"}
        textColor={"#ff007a"}
        onPress={() => navigation.navigate("Details")}
      />
      <DefaultButton
        title="Criar conta"
        style={styles["button-register"]}
        mode={"outlined"}
        textColor={"#fff"}
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#ff007a",
    gap: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
    fontFamily: "Montserrat-Bold",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  "button-register": {
    width: "100%",
    height: 50,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
  },
});

export default HomeScreen;
