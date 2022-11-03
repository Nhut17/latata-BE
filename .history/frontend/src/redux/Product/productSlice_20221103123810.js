import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    listProduct: [],
    loading: tu
}

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }
})