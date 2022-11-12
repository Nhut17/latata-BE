import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    success: false,
    loading: false,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers
})