import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listProduct: [],
    loading: true
}

export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await axios.get('') 
            }
            catch (e){

            }
        })

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }

})



export default productReducer.reducer;