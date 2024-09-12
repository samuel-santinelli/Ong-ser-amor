import OTPTextView from "react-native-otp-textinput";
import DefaultView from "../components/DefaultView";
import DefaultLabel from "../components/DefaultLabel";
import DefaultTitle from "../components/DefaultTitle";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Button, Text } from "react-native-paper";
import DefaultButton from "../components/DefaultButton";

const ConfirmOTPCode = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(120);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    if (secondsRemaining > 0 && isActive) {
      timer = setInterval(() => {
        setSecondsRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [secondsRemaining, isActive]);

  return (
    <DefaultView>
      <DefaultTitle title={"Código de redefinição"} />
      <DefaultLabel
        label={"Informe o codigo recebido no e-mail para redefinir sua senha"}
      />
      <View style={{marginTop: 40}}>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={6}
          tintColor={"#ff007a"}
          keyboardType="numeric"
        />
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ color: "#ff007a" }}>
            {secondsRemaining + " segundos"}
          </Text>
          <Button
            onPress={() => setSecondsRemaining(120)}
            disabled={secondsRemaining !== 0}
            textColor="#ff007a"
          >
            Enviar novamente
          </Button>
        </View>
      </View>
      <DefaultButton
        style={styles.button}
        textColor={"#fff"}
        title={"Avançar"}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
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

export default ConfirmOTPCode;
