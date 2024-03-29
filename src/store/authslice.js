import { createSlice} from '@reduxjs/toolkit';
const initialAuthState = {
    isAuthenticated: false,
    token:'',
  };
  
  const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      login(state,action) {
        state.isAuthenticated = true;
        state.token=action.payload;
        console.log(state.token);
        
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  export const authActions = authSlice.actions;
  
  export default authSlice.reducer;
  