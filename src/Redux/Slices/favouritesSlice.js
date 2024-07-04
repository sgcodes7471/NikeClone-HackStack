import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState={
    products:[],
    quantity:0
}

export const favouritesSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
            addFav : (state , actions)=>{
            const newProduct = actions.payload.product
            const doesExist = state.products.find((product)=>product.articleNo === newProduct.articleNo)
            if(doesExist) return
            state.products.push(newProduct)
            console.log(JSON.stringify(state, null,2))
            },
            removeFav : (state , actions)=>{
                const productToBeRemoved = actions.payload.product
                state.products=(state.products).filter((product)=>product.articleNo!==productToBeRemoved.articleNo)
            }
    }
})


export const {addFav, removeFav} = favouritesSlice.actions

export default favouritesSlice.reducer