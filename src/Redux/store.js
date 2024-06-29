import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './Slices/productSlice.js'
import UserSlice from './Slices/userSlice.js'
import CartSlice from './Slices/cartSlice.js'
import FavouritesSlice from './Slices/favouritesSlice.js'
export const store=configureStore({
})