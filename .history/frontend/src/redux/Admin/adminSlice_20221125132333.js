import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(id,thunkAPI) => {
                    try{
                            const res = await axios.delete(`http://localhost:4000/api/v1/admin/product/${id}
                            `)
                    }
                    catch(e){

                    }
                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
})