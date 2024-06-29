import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[{"articleNo":null , "productName":null}]
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addFilters:(state, actions)=>{
            //send all the filters in actions.payload and set the state accordingly accordingly
        }
    }
})

export const {productsActions} = productSlice.actions

export default productSlice.reducer