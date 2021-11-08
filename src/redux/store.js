// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import currentPlaylistSlice from './slices/currentPlaylistSlice';
import userSlice from './slices/userSlice';
import userPlaylistsSlice from './slices/userPlaylistsSlice';
import currentNotesSlice from  './slices/PlaylistNotesSlice'
// import userSliceReducer, { setAuthToken } from './slices/userSlice';

// Note: Thanks to RTK #configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
export default configureStore ({
    reducer: {
        userSliceReducer: userSlice,
        userPlaylistsReducer: userPlaylistsSlice,
        currentPlaylistReducer: currentPlaylistSlice,
        currentNotesSliceReducer: currentNotesSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
    })