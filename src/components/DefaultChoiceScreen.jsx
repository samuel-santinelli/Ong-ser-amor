
import DefaultTitle from "./DefaultTitle";
import DefaultButton from "./DefaultButton";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DefaultChoiceScreen = ({ color }) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <DefaultTitle
          title={"Crie uma conta ou faça login para acessar a pagina"}
          color={color}
        />
      </View>
      <View style={{ marginTop: 100 }}>
        <View style={{ marginTop: 20, gap: 10 }}>
          <DefaultButton
            title={"Login"}
            textColor={"#fff"}
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => navigation.navigate("Login")}
          />
          <DefaultButton
            title={"Cadastrar"}
            icon={"logout"}
            textColor={"#fff"}
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => navigation.navigate("Register")}
          />
          <DefaultButton
            title={"Sou funcionário"}
            textColor={color}
            style={[styles.logout_button, { borderColor: color }]}
            onPress={() => navigation.navigate("Choice")}
          />
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    button: {
      backgroundColor: "#ff007a",
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
  
    donation_button: {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
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
  });

  

export default DefaultChoiceScreen;