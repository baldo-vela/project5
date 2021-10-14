import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import userSliceReducer, { setAuthToken } from './slices/userSlice';
//TODO: Depreciate this and move it's functions to index
export default configureStore ({
    reducer: {
        //TODO Replace this with a root reducer
        userSliceReducer: userSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
    })