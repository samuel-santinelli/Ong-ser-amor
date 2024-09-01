import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DefaultView from "../components/DefaultView";
import DefaultTitle from "../components/DefaultTitle";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import { useForm } from "react-hook-form";
import DefaultLabel from "../components/DefaultLabel";

const ForgotMyPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const emailRef = useRef(null);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {      
      setLoading(false);
    }, 2000);
  };

  return (
    <DefaultView>
      <DefaultTitle title={"Esqueci minha senha"} />
      <DefaultLabel label={"Informe o e-email para o qual desejada redefinir sua senha"}/>
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
      <DefaultButton
        title="Enviar"
        style={styles.button}
        mode={"outlined"}
        loading={loading}
        loadingText={"Processando informações..."}
        textColor={"#fff"}
        onPress={handleSubmit(onSubmit)}
      />
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

export default ForgotMyPassword;
