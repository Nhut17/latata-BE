import axios from "axios";
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

// get list cart user
export const getCartUser  = createAsyncThunk('cart/get', 
            async(data, thunkAPI) => {
        
            const token = localStorage.getItem('token')
            const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

        try{
            const res = await api.get('/api/v1/cart/getCartUser', config)

            return res.data.cart
        } 
        catch(err){

        }
})

// delete cart
export const deleteCart = createAsyncThunk('cart/delete',
            async(id,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.delete(`/api/v1/cart/${id}`,config)
                        thunkAPI.getCartUser()

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
        [getCartUser.fulfilled] : (state,action) =>{
            state.listCartUser = action.payload
        }
    }
})

export default cartSlice.reducer