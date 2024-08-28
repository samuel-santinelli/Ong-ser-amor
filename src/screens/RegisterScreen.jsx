import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import { useForm } from "react-hook-form";
import { ActivityIndicator, MD2Colors, TextInput } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [showPassord, setShowPassord] = useState(true);
  const [showConfirmPassord, setShowConfirmPassord] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };

  return (
    <DefaultView>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={{ fontSize: 20 }}>Processando dados...</Text>
          <ActivityIndicator
            animating={true}
            color={"#ff007a"}
            size={"large"}
            source={require("../../assets/imgs/ong_logo.png")}
            style={styles.loadingGif}
          />
        </View>
      ) : (
        <>
          <DefaultTitle title={"Criar conta"} />
          <DefaultInput
            label={"Nome"}
            mode="outlined"
            mask={""}
            secureTextEntry={false}
            {...register("name", { required: "Nome é obrigatório" })}
            setValue={setValue}
            value={watch("name")}
            error={errors.name ? true : false}
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
            label={"Celular"}
            mode="outlined"
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
            error={errors.phone ? true : false}
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
            mask={""}
            secureTextEntry={false}
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
            })}
            setValue={setValue}
            value={watch("email")}
            error={errors.email ? true : false}
            ref={emailRef}
            onChangeText={(text) => {
              setValue("email", text);
              clearErrors("email");
            }}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

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
            {...register("password", { required: "Senha é obrigatória" })}
            setValue={setValue}
            value={watch("password")}
            error={errors.password ? true : false}
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
            right={
              <TextInput.Icon
                icon={showConfirmPassord ? "eye" : "eye-off"}
                color="#ff007a"
                onPress={() => setShowConfirmPassord(!showConfirmPassord)}
              />
            }
            secureTextEntry={showConfirmPassord}
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
            })}
            setValue={setValue}
            value={watch("confirmPassword")}
            error={errors.confirmPassword ? true : false}
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
        </>
      )}

      <View style={{ justifyContent: "flex-end", marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Medium" }}>
          Já possui conta?{" "}
          <Text
            style={{ color: "#ff007a", fontFamily: "Montserrat-Bold" }}
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
