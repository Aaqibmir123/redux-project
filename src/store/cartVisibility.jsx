import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibile: localStorage.getItem('cart') || true,
}

const createCartSlice = createSlice({
    name: "cartVisibiuty",
    initialState,
    reducers: {
        togglecart: (state)=>{
            state.visibile = !state.visibile,
            localStorage.setItem('cart',JSON.stringify(state.visibile));
        }
    }
});

export const { togglecart } = createCartSlice.actions;

export default createCartSlice.reducer;
