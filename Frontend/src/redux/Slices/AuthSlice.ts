import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  username:"",
  password:""
};


const authSlice = createSlice({
    name:"auth",
    initialState,

    reducers:{
        saveUsername:(state,actions)=>{
            state.username = actions.payload
        },
        savePassword:(state,actions)=>{
            state.password = actions.payload
        }
    }
});

export const {saveUsername,savePassword} = authSlice.actions;
export default authSlice.reducer;