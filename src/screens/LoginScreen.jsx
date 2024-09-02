import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultCheckbox from "../components/DefaultCheckbox";
import { useLayoutEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";
import { TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/api";
import DefaultSpinner from "../components/DefaultSpinner";

const LoginScreen = ({ navigation }) => {
  const [statusRememberMe, setStatusRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  function changeRememberMe() {
    setStatusRememberMe(!statusRememberMe);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !loading,
    });
  }, [navigation, loading]);

  async function onSubmit(data) {
    setResponseError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));

      let newData = {
        email: data.email,
        senha: data.password,
      };

      const response = await loginUser(newData);
      setLoading(false);

      if (response.status === 200) {
        reset();
        navigation.navigate("Details");
      } else {
        setResponseError(
          "Ocorreu um erro na tentativa de login. Por favor, verifique os dados e tente novamente."
        );

        return false;
      }
    } catch (error) {
      setResponseError("Erro de conexão");
    }
  }

  return (
    <DefaultView color={loading ? "#ff007a" : ""}>
      {loading ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
            backgroundColor: "#ff007a",
          }}
        >
          {/* <Text style={{fontSize: 18}}>Validando suas informações</Text> */}
          <DefaultSpinner />
        </View>
      ) : (
        <>
          <DefaultTitle title={"Login"} />
          <DefaultInput
            label={"E-mail"}
            mode="outlined"
            keyboardType={"default"}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={false}
            spellCheck={false}
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
            })}
            setValue={setValue}
            value={watch("email")}
            error={!!errors.email || responseError}
            ref={emailRef}
            onChangeText={(text) => {
              setValue("email", text);
              clearErrors("email");
              setResponseError(""); // Clear the specific email error if corrected
            }}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          {errors.email && (
            <Text style={styles.errorText}>
              {errors.email ? errors.email.message : ""}
            </Text>
          )}
          <DefaultInput
            label={"Senha"}
            mode="outlined"
            mask={""}
            keyboardType={"default"}
            autoCorrect={false}
            autoCapitalize={false}
            spellCheck={false}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye" : "eye-off"}
                color="#ff007a"
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            secureTextEntry={showPassword}
            {...register("password", { required: "Senha é obrigatória" })}
            setValue={setValue}
            value={watch("password")}
            error={!!errors.password || responseError}
            ref={passwordRef}
            onChangeText={(text) => {
              setValue("password", text);
              clearErrors("password");
            }}
            returnKeyType="next"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <View style={styles.container}>
            <DefaultCheckbox
              setStatus={changeRememberMe}
              status={statusRememberMe}
              label={"Lembre-se de mim"}
            />
            <Text
              style={{ color: "#ff007a", fontFamily: "Montserrat-Medium" }}
              onPress={() => navigation.navigate("Forgot my password")}
            >
              Esqueci minha senha
            </Text>
          </View>
          <DefaultButton
            title="Entrar"
            style={styles.button}
            loading={loading}
            loadingText={"Processando informações..."}
            mode={"outlined"}
            textColor={"#fff"}
            onPress={handleSubmit(onSubmit)}
          />
          {responseError && (
            <Text style={styles.errorText}>
              {errors.email ? errors.email.message : responseError}
            </Text>
          )}
          <View style={{ justifyContent: "flex-end", marginTop: 20 }}>
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}
            >
              Não possui conta?{" "}
              <Text
                style={{ color: "#ff007a", fontFamily: "Montserrat-Bold" }}
                onPress={() => navigation.navigate("Register")}
              >
                Crie já
              </Text>
            </Text>
          </View>
        </>
      )}
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
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
export default LoginScreen;
