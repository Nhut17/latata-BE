import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    success: false,
    loading: false,
}

export const registerUser = create

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {

    }
})