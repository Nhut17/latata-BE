import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const deleteProduct = createAsyncThunk()


const adminSlice = createSlice({
    name: "admin",
    initialState,
})