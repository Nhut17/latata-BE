const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
}

export const addCart = createAsyncThunk('cart/add')


const cartSlice = createSlice({
    name: "cart",
    initialState,
})