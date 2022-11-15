import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    success: false,
    loading: false,
}

export const registerUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) )

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})