import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    listProduct: [],
    loading: true
}

export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res 
            }
            catch{

            }
        })

const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {

    }

})



export default productReducer.reducer;