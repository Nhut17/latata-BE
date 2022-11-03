import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listProduct: [],
    loading: true
}

export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await axios.get('http://localhost:4000/api/v1/products?page=2') 
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProduct.pending]: (state,action) => {
            state.loading = true
        },
        [getProduct.fulfilled]: (state,action) => {

        },
        [getProduct.rejected]: (state,action) => {

        }
    }

})



export default productReducer.reducer;