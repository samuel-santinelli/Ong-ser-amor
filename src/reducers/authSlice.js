import { createSlice } from '@reduxjs/toolkit';
import { removeToken, storeToken } from '../services/token/TokenManager';

const initialState = {
  token: null, // Estado inicial sem token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      storeToken(action.payload);
      state.token = action.payload;
    },
    clearToken: (state) => {
      removeToken();
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
