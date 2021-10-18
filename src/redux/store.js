import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import userSliceReducer, { setAuthToken } from './slices/userSlice';
//TODO: Depreciate this and move it's functions to index
// Note: Thanks to RTK #configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
export default configureStore ({
    reducer: {
        userSliceReducer: userSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
    })