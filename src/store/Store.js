import { configureStore } from '@reduxjs/toolkit';
import Slicecodereducer from './counterSlice';
import authSlicereducer from "./authslice";
import infomartionReducer from './informationslice';
import darkMode from "./darkModeSlice";
const store = configureStore({
  reducer: { counter: Slicecodereducer, 
    auth: authSlicereducer,
     userData: infomartionReducer,
     mode:darkMode,
     },
});




export default store;