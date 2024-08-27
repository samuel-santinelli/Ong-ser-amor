import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";
import { Icon, TextInput } from "react-native-paper";
import { useState } from "react";

const RegisterScreen = ({ navigation }) => {
  const [showPassord, setShowPassord] = useState(true);
  const [showConfirmPassord, setShowConfirmPassord] = useState(true);
  return (
    <DefaultView>
      <DefaultTitle title={"Criar conta"} />
      <DefaultInput
        label={"Nome"}
        mode="outlined"
        mask={""}
        secureTextEntry={false}
      />
      <DefaultInput label={"Celular"} mode="outlined" mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} secureTextEntry={false}/>
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
        right={<TextInput.Icon icon={showPassord ? "eye" : "eye-off"} color="#ff007a" onPress={() => setShowPassord(!showPassord)} />}
        secureTextEntry={showPassord}
      />
      <DefaultInput
        label={"Confirmar senha"}
        mode="outlined"
        mask={""}
        right={<TextInput.Icon icon={showConfirmPassord ? "eye" : "eye-off"} color="#ff007a" onPress={() => setShowConfirmPassord(!showConfirmPassord)} />}
        secureTextEntry={showPassord}
      />
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
          <Text
            style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }}
            onPress={() => navigation.navigate("Login")}
          >
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
    marginTop: 20,
  },
});
export default RegisterScreen;
