
import { createSlice } from '@reduxjs/toolkit';

const initialValue ={
    mode: localStorage.getItem('dark') || false,
}

const darkMode = createSlice({
  name: 'darkMode',
  initialState:initialValue,
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
      localStorage.setItem('dark',JSON.stringify(state.mode));

    },
  },
});

export const {toggleTheme} = darkMode.actions;

export default darkMode.reducer;

