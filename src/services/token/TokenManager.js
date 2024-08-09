import * as SecureStore from "expo-secure-store";
const TOKEN_KEY = "userToken";

export const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error("Error saving token", error);
  }
};

export const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      return token; 
    } catch (error) {
      console.error('Erro ao recuperar o token:', error);
      throw error; 
    }
  };

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Error removing token", error);
  }
};
