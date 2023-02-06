import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const infoSlice = createSlice({
    name: "User information",
    initialState,
    reducers: {

        edit(state, action) {
            // console.log("hello",action.payload)
            state.data = [...state.data, action.payload];
            
        },
        refresh(state,action) {
            state.data = action.payload
        },

        

    }
});

export const informationSlice = infoSlice.actions;

export default infoSlice.reducer;
//Add a dark theme in your application. using redux-toolkit