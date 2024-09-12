import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null, // Estado inicial sem token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // Atualiza o token com o payload
    },
    clearToken: (state) => {
      state.token = null; // Limpa o token (logout)
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
