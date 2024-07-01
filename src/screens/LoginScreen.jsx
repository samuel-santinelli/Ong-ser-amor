import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultCheckbox from "../components/DefaultCheckbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";

const LoginScreen = () => {
  const [statusRememberMe, setStatusRememberMe] = useState(false);

  function changeRememberMe(){
    setStatusRememberMe(!statusRememberMe);
  }

  return (
    <DefaultView>
      <DefaultTitle title={"Login"} />
      <DefaultInput label={"E-mail"} mode="outlined" />
      <DefaultInput label={"Senha"} mode="outlined" />
      <View style={styles.container}>
        <DefaultCheckbox
          setStatus={changeRememberMe}
          status={statusRememberMe}
          label={"Lembrar-me"}
        />
        <Text style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }}>
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
      <View style={{ justifyContent: "flex-end" }}>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}>
          Não possui conta?{" "}
          <Text style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }}>
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
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
export default LoginScreen;
