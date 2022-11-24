import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listProduct: [],
    listProductCate: [],
    productDetail: {},
    priceDeal: 0,
    message: '',
    loading: true ,
    listProductAdmin: []
}

export const getAllProducts = createAsyncThunk('product/getAll', async (data,thunkAPI) => {
    try{
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: 'Bearer ' + token,
           
        }
        const res = await axios.get('http://localhost:4000/api/v1/products',{
            headers: headers,
        })
        return res.data
    }
    catch(e)
    {
        return thunkAPI.rejectWithValue('Error with get api')
    }

})

// Delete Product
export const deleteProduct = createAsyncThunk('product/delete', 
        async (id,thunkAPI) => {
            try{
                
                const token = localStorage.getItem('token')
                const headers = {
                    Authorization: 'Bearer ' + token,
                }
                const res = await axios.delete(`http://localhost:4000/api/v1/product/${id}`,{
                        headers: headers
                })

                thunkAPI.dispatch(getAllProducts())
                return res.data

            }
            catch(e){
                return thunkAPI.rejectWithValue('Error with get product detail')
            }
        })



    const adminProductSlice = createSlice(
        {
            name:'adminProduct',
            initialState,
            extraReducers:
            {
                [getAllProducts.fulfilled] : (state,action) => {
                    state.listProductAdmin = action.payload
                }
            }
        }
    )
        
        export const {}  = adminProductSlice.actions; 
        
        export default adminProductSlice.reducer