import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './Slices/productSlice.js'
import CurrentSlice from './Slices/currentSlice.js'
import UserSlice from './Slices/userSlice.js'
import CartSlice from './Slices/cartSlice.js'
import FavouritesSlice from './Slices/favouritesSlice.js'
import { combineReducers } from '@reduxjs/toolkit'

const combinedReducer = combineReducers({
    ProductSlice:ProductSlice,
    UserSlice:UserSlice,
    CartSlice:CartSlice,
    FavouritesSlice:FavouritesSlice,
    CurrentSlice:CurrentSlice
})

export const store=configureStore({
    reducer:combinedReducer
})