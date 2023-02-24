import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getProducts =createAsyncThunk('product/getProducts',async()=>{
    const resp= await fetch('https://course-api.com/react-store-products')
    const data=await resp.json()
    return data

})

const initialState ={
    products:[],
    isLoading:true
}

 const productSlice = createSlice({
    name:'product',
    initialState,

    extraReducers:{
        [getProducts.fulfilled] : (state,action)=>{


            state.isLoading=false
            state.products=action.payload
        }
    }
})


export const productRed= productSlice.reducer