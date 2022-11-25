import { data } from "jquery";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI))


const cartSlice = createSlice({
    name: "cart",
    initialState,
})