import axios from "axios";
import { data } from "jquery";
import api from '../../api/api'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI) =>{

                console.log(data) 
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                try{

                        const res = await api.post(`/api/v1/cart/add`,data)

                        return res.data

                }
                catch(e)
                {

                }
            })


const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers:{

    }
})

export default cartSlice.reducer