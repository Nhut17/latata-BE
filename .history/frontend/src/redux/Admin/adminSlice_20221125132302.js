import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(data,thunkAPI) => {
                    try{
                            const res = await axios.delete('')
                    }
                    catch(e){

                    }
                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
})