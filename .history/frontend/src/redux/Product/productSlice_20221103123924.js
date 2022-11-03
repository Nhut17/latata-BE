import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    listProduct: [],
    loading: true
}

export const getProduct = createAsyncThunk('')

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }

})



export default productReducer.reducer;