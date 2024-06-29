import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[{"articleNo":null , "productName":null}],
    quantity:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addRemoveCart : (state , actions)=>{
            const newProduct = actions.payload
            const doesExist = state.products.find((product)=>product.articleNo === newProduct.articleNo)
            if(doesExist){
                state.products = state.products.filter((product)=>product.articleNo!==newProduct.articleNo)
                return
            }
            state.products.push(newProduct)
        }
    }
})


export const {cartActions} = cartSlice.actions

export default cartSlice.reducer