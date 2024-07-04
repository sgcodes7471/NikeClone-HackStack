import { createSlice } from "@reduxjs/toolkit";

export const currentSlice=createSlice({
    name:'current',
    initialState:null,
    reducers:{
        setCurrent  : (state,actions)=>{
            return actions.payload
        }
    }
})

export const {setCurrent} = currentSlice.actions
export default currentSlice.reducer