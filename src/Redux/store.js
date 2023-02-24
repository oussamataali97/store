import { configureStore } from '@reduxjs/toolkit'
import { productRed } from './productSlice'
export const store = configureStore({
    reducer :{
        product: productRed
    }
})