import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success: false,
    loading: false,
}

export const registerUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {
            try{
                const res = await axios.pos('')

                return res.data
            }
            catch(e){

            }
        })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})