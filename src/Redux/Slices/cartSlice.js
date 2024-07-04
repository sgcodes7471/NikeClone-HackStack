import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart : (state , actions)=>{
            const newProduct = actions.payload.product
            const size = actions.payload.size
            const color = actions.payload.url
            const doesExist = (state.products).find((product)=>
            product.articleNo === newProduct.articleNo && size === product.size && color === product.color)
            if(doesExist) return
            (state.products).push({...newProduct , size ,color})
        },
        removeCart : (state , actions)=>{
            const productToBeRemoved = actions.payload.product
            state.products = (state.products).filter((product)=>
                !(product.productName===productToBeRemoved.productName && productToBeRemoved.size===product.size && productToBeRemoved.color===product.color)
            )
        }
    }
})


export const {addCart, removeCart} = cartSlice.actions

export default cartSlice.reducer