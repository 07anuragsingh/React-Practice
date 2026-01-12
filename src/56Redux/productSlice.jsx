import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products');
        return res.data.products;
    } catch (error) {
        console.log(error);
    }
})

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        items: [], 
        status: undefined,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.payload
        })
    }

})

export default productSlice.reducer;