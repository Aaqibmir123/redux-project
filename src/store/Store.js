import { configureStore } from '@reduxjs/toolkit';
import Slicecodereducer from './counterSlice';
import authSlicereducer from "./authslice";

const store = configureStore({
  reducer: { counter: Slicecodereducer, auth:authSlicereducer},
});




export default store;