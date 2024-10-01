import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice'; 
import themeReducer from '../reducers/themeSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer, 
    theme: themeReducer
  },
});

export default store;
