import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(data,thunkAPI) => {
                    try{

                    }
                    catch(e){
                        
                    }
                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
})