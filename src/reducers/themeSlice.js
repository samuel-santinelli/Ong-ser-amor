// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    primaryColor: 'blue', 
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor } = themeSlice.actions;
export default themeSlice.reducer;
