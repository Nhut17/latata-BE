import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(data,thunkAPI) => {
                    try{
                            const res = await axios.delete(`http://localhost:4000/api/v1/admin/product/634e5f0ea52c7f12f73655d6
                            `)
                    }
                    catch(e){

                    }
                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
})