import axios from "axios";
import { storeToken } from "./token/TokenManager";

const BASE_URL = process.env.BASE_URL || "http://10.0.2.2:3000";

axios.defaults.baseURL = BASE_URL;

export async function createUser(data) {
  try {
    const path = `/cadastro`;
    const result = await axios.post(path, data);
    return result;
  } catch (error) {
    if (error.response) {
      if (error.response.data === "E-mail já cadastrado") {
        return 'Este e-mail já foi cadastrado.';
      } else {
        return 'Ocorreu um erro ao tentar criar o usuário. Por favor, verifique os dados e tente novamente.';
      }
    } else {
      return 'Não foi possível conectar aos nossos servidores no momento. Por favor, tente novamente mais tarde.';
    }
    throw error; // Opcional: relançar o erro se você quiser que ele seja tratado em outro lugar
  }
}

export async function loginUser(data) {
  try {
    const path = `/loginUsuario`;
    const result = await axios.post(path, data);
    storeToken(result.data.token)
    
    return result;
  } catch (error) {
    if (error.response) {      
      if (error.response.data.error === "Credenciais inválidas") {
        return 'E-mail ou senha inválido.';
      } else {
        return 'Ocorreu um erro na tentativa de login. Por favor, verifique os dados e tente novamente.';
      }
    } else {
      return 'Não foi possível conectar aos nossos servidores no momento. Por favor, tente novamente mais tarde.';
    }
    throw error; // Opcional: relançar o erro se você quiser que ele seja tratado em outro lugar
  }
}
