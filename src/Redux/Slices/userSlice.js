import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const {userActions} = userSlice.actions

export default userSlice.reducer

