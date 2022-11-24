import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    listCate: [],
    success: false,
    cateById: {},
    successAdd: false,
}

// get all categories
export const getAllCategories = createAsyncThunk('category/getAll',
    async (data, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:8083/category/getAllActive')

            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })


// Get category by id
export const getCategoryById = createAsyncThunk('category/getById',
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:8083/category/${id}`)

            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with get all categories')
        }
    })
export const addCate = createAsyncThunk('admin/cate/addCate',
    async (data, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.post('http://localhost:8083/admin/category/createCategory', data, { headers: headers })

            thunkAPI.dispatch(getAllCategories())
            return res.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Error with api add cart')
        }
    })
export const deleteCate = createAsyncThunk('cate/delete',
    async (id, thunkAPI) => {
        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: 'Bearer ' + token
            }
            const res = await axios.delete(`http://localhost:8083/admin/category/${id}`, { headers: headers })
            thunkAPI.dispatch(getAllCategories())
            return res.data
        }
        catch (e) {

        }
    })
const adminCateSlice = createSlice({
    name: 'adminCate',
    initialState,
    extraReducers: {
        [getAllCategories.fulfilled]: (state, action) => {
            state.listCate = action.payload
        },
        [getCategoryById.fulfilled]: (state, action) => {
            state.cateById = action.payload
        },
        [addCate.fulfilled]: (state, action) => {
            console.log('success')
        },
        [addCate.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export const {} = adminCateSlice.actions;

export default adminCateSlice.reducer

