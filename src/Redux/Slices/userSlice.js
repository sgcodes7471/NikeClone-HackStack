import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isLoggedIn:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        Signup:(state , actions)=>{
            //use firebase
        },
        Signin:(state, actions)=>{
            //use Firebase and send the password and email for auth
        }
    }
})

export const {Signin , Signup} = userSlice.actions

export default userSlice.reducer

