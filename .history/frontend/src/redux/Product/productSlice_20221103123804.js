import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listProduct: [],
    
}

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }
})