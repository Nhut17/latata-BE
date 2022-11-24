import { combineReducers, configureStore } from '@reduxjs/toolkit'
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
import provinceVNSlice from './redux/ProvinceVN/provinceVNSlice'
import adminUserSlice from './redux/Admin/adminUserSlice'
import adminProductSlice from './redux/Admin/adminProductSlice'
import adminCateSlice from './redux/Admin/adminCateSlice'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const rootReducer = combineReducers({
    product: productSlice,
    user: userSlice,
    province: provinceVNSlice,
    adminUser : adminUserSlice,
    adminProduct : adminProductSlice,
    adminCate : adminCateSlice
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
