import axios from "axios";
import { data } from "jquery";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI) =>{
                try{

                        const res = await axios.post(``)

                }
                catch(e)
                {

                }
            })


const cartSlice = createSlice({
    name: "cart",
    initialState,
})