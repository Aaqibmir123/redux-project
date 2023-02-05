import { configureStore } from '@reduxjs/toolkit';
import Slicecodereducer from './counterSlice';
import authSlicereducer from "./authslice";
import infomartionReducer from './informationslice';
const store = configureStore({
  reducer: { counter: Slicecodereducer, auth: authSlicereducer, userData: infomartionReducer },
});




export default store;