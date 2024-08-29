import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultCheckbox from "../components/DefaultCheckbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";
import { TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [statusRememberMe, setStatusRememberMe] = useState(false);
  const [showPassord, setShowPassord] = useState(true);
  

  function changeRememberMe() {
    setStatusRememberMe(!statusRememberMe);
  }

  return (
    <DefaultView>
      <DefaultTitle title={"Login"} />
      <DefaultInput
        label={"E-mail"}
        mode="outlined"
        mask={""}
        secureTextEntry={false}
      />
      <DefaultInput
        label={"Senha"}
        mode="outlined"
        mask={""}
        right={
          <TextInput.Icon
            icon={showPassord ? "eye" : "eye-off"}
            color="#ff007a"
            onPress={() => setShowPassord(!showPassord)}
          />
        }
        secureTextEntry={showPassord}
      />
      <View style={styles.container}>
        <DefaultCheckbox
          setStatus={changeRememberMe}
          status={statusRememberMe}
          label={"Lembre-se de mim"}
        />
        <Text style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }} onPress={() => navigation.navigate("Forgot my password")}>
          Esqueci minha senha
        </Text>
      </View>
      <DefaultButton
        title="Entrar"
        style={styles.button}
        mode={"outlined"}
        textColor={"#fff"}
        onPress={() => navigation.navigate("Details")}
      />
      <View style={{ justifyContent: "flex-end", marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}>
          Não possui conta?{" "}
          <Text
            style={{ color: "#ff007a", fontFamily: "Montserrat-Bold" }}
            onPress={() => navigation.navigate("Register")}
          >
            Crie já
          </Text>
        </Text>
      </View>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",    
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#ff007a",  
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
export default LoginScreen;
