import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ButtonComponent from "../components/Button"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
      width={400}
      height={400}
      source={require("../../assets/imgs/ong_logo.png")}/>
      <Text style={styles.title}>O amor ganhando forma</Text>
      <ButtonComponent
        title="Login"
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      />
      <ButtonComponent
        title="Go to Details"
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      />
      <ButtonComponent
        title="Go to Details"
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
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
    fontFamily: "Montserrat-Black",
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
    fontWeight: "700",
    fontFamily: "Montserrat-Black",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default HomeScreen;
