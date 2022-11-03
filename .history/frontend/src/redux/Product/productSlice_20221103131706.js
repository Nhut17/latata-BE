import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "body-parser";


const initialState = {
    listProduct: [],
    loading: false
}

export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await axios.get('api/v1/products') 

                console.log('data: '+ json.stri)
                return res.data
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
            state.loading = false;
            state.listProduct = action.payload
        },
        [getProduct.rejected]: (state,action) => {

        }
    }

})



export default productReducer.reducer;