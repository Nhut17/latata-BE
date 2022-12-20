import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

const initialState = {
    listAddress: null,

}


// get addresses
export const getAddress = createAsyncThunk('address',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.get('/api/v1/address',config)
                console.log(res.data)
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

// update default addresses
export const updateDefaultAddress = createAsyncThunk('user/address/update',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.put(`/api/v1/address/${id}`,config)
                
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

// add address
export const addAddress = createAsyncThunk('user/address/add',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const { id}  = data

                const res = await api.post(`/api/v1/address/${id}`,data,config)
                
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {

    }
})

export default addressSlice.reducer