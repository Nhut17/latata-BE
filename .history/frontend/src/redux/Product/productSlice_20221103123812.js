import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listProduct: [],
    loading: true,
}

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }
})