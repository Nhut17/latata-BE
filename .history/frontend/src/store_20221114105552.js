import { configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/Product/productSlice'
import userSlice from './redux/User/userSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  import { PersistGate } from 'redux-persist/integration/react'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const store = configureStore({
    reducer:{
        product: productSlice,
        user: userSlice

    }
}) 

export default store