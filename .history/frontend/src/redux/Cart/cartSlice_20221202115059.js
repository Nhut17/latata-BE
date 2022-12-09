import axios from "axios";
import { data } from "jquery";
import api from "../api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI) =>{

                const { id  } = data

                try{

                        const res = await api.post(`http://localhost:4000/api/v1/cart/add/${id}`,{
                            quantity: 1
                        })

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