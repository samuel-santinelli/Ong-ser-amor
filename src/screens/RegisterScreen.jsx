import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultCheckbox from "../components/DefaultCheckbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";

const RegisterScreen = () => {
  const [statusRememberMe, setStatusRememberMe] = useState(false);

  function changeRememberMe(){
    setStatusRememberMe(!statusRememberMe);
  }

  return (
    <DefaultView>
      <DefaultTitle title={"Criar conta"} />
      <DefaultInput label={"Nome"} mode="outlined" />
      <DefaultInput label={"Celular"} mode="outlined" />
      <DefaultInput label={"E-mail"} mode="outlined" />
      <DefaultInput label={"Senha"} mode="outlined" />
      <DefaultButton
        title="Criar"
        style={styles.button}
        mode={"outlined"}
        textColor={"#fff"}
        onPress={() => navigation.navigate("Details")}
      />
      <View style={{ justifyContent: "flex-end", marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}>
          Já possui conta?{" "}
          <Text style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }}>
            Entre já
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
    marginTop: 20
  },
});
export default RegisterScreen;