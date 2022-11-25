import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../Product/productSlice";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(id,thunkAPI) => {
                    try{
                            const res = await axios.delete(`http://localhost:4000/api/v1/admin/product/${id}
                            `)

                            thunkAPI.dispatch(getProduct())
                            return res.data
                    }
                    catch(e){

                    }
                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
})