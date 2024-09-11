import React, { useState, useRef, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { createUser } from "../services/api";
import { FormatPhoneNumber } from "../utils/FormatPhoneNumber";
import DefaultSpinner from "../components/DefaultSpinner";

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

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
        nome: data.name,
        email: data.email,
        senha: data.password,
        telefone: FormatPhoneNumber(data.phone),
      };
      const response = await createUser(newData);
      setLoading(false);

      if (response.status === 201) {
        reset();
        navigation.navigate("Details");
      } else {
        setResponseError("Erro ao criar usuário");
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
          <DefaultTitle title={"Criar conta"} />
          <DefaultInput
            label={"Nome"}
            mode="outlined"
            secureTextEntry={false}
            autoCorrect={true}
            autoCapitalize={true}
            spellCheck={true}
            keyboardType={"default"}
            {...register("name", { required: "Nome é obrigatório" })}
            setValue={setValue}
            value={watch("name")}
            error={!!errors.name}
            ref={nameRef}
            onChangeText={(text) => {
              setValue("name", text);
              clearErrors("name");
            }}
            onSubmitEditing={() => phoneRef.current.focus()}
            returnKeyType="next"
          />
          {errors.name && (
            <Text style={styles.errorText}>{errors.name.message}</Text>
          )}

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
            {...register("phone", { required: "Celular é obrigatório" })}
            setValue={setValue}
            value={watch("phone")}
            error={!!errors.phone}
            ref={phoneRef}
            onChangeText={(text) => {
              setValue("phone", text);
              clearErrors("phone");
            }}
            onSubmitEditing={() => emailRef.current.focus()}
            returnKeyType="next"
          />
          {errors.phone && (
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          )}

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
            error={
              !!errors.email ||
              responseError === "Este e-mail já foi cadastrado."
            }
            ref={emailRef}
            onChangeText={(text) => {
              setValue("email", text);
              clearErrors("email");
              setResponseError("");
            }}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          {(errors.email ||
            responseError === "Este e-mail já foi cadastrado.") && (
            <Text style={styles.errorText}>
              {errors.email ? errors.email.message : responseError}
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
            error={!!errors.password}
            ref={passwordRef}
            onChangeText={(text) => {
              setValue("password", text);
              clearErrors("password");
            }}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            returnKeyType="next"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <DefaultInput
            label={"Confirmar senha"}
            mode="outlined"
            mask={""}
            keyboardType={"default"}
            autoCorrect={false}
            autoCapitalize={false}
            spellCheck={false}
            right={
              <TextInput.Icon
                icon={showConfirmPassword ? "eye" : "eye-off"}
                color="#ff007a"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            }
            secureTextEntry={showConfirmPassword}
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("password") || "As senhas não coincidem",
            })}
            setValue={setValue}
            value={watch("confirmPassword")}
            error={!!errors.confirmPassword}
            ref={confirmPasswordRef}
            onChangeText={(text) => {
              setValue("confirmPassword", text);
              clearErrors("confirmPassword");
            }}
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="done"
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}

          <DefaultButton
            title="Criar"
            style={styles.button}
            mode={"outlined"}
            loading={loading}
            loadingText={"Processando informações..."}
            textColor={"#fff"}
            onPress={handleSubmit(onSubmit)}
          />

          <View style={{ justifyContent: "flex-end", marginTop: 20 }}>
            <Text
              style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}
            >
              Já possui conta?{" "}
              <Text
                style={{ color: "#ff007a", fontFamily: "Montserrat-Bold" }}
                onPress={() => navigation.navigate("Login")}
              >
                Entre já
              </Text>
            </Text>
          </View>
        </>
      )}
    </DefaultView>
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
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});

export default RegisterScreen;
