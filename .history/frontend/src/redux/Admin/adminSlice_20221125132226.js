import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin')


const adminSlice = createSlice({
    name: "admin",
    initialState,
})