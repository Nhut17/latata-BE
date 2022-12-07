import axios from "axios";
import { data } from "jquery";
import api from '../../api/api'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
  listCartUser:null,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.post('/api/v1/cart/add',data,config)

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