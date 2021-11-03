import { createAsyncThnk, createSlice } from '@reduxjs/toolkit';
import { selectUserPlaylists, selectPlaylistByID } from './userPlaylistsSlice';
import { selectAuth } from './userSlice';

//Note: the extra lifecycle booleans are for expansion
const initialState = {
    currentPlaylist: [],
    isLoading: false,
    hasError: false,
    error: null,
}

//May need an async thunk to fetch additiona information about a playlist and it's tracks here

//Slice Object

const sliceOptions = {
    name: "currentPlaylist",
    initialState: initialState,
    reducers: {
        setPlaylist: (state, action) => {
            state.push(action.payload);
        },
        clearPlaylist: (state, action) => {
            state.filter(playlist => playlist.id !== action.payload.id)
        },
    },
    extraReducers: {
        // [fetchCurrentPlaylist.pending]: (state) => {
        //     state.isLoading = true;
        //     state.hasError = false;
        //   },
        // [fetchCurrentPlaylist.fulfilled]: (state, action) => {
        //     state.playlists = action.payload;
        //     state.isLoading = false;
        //     state.hasError = false;
        // },
        // [fetchCurrentPlaylist.rejected]: (state) => {
        //     state.isLoading = false;
        //     state.hasError = true;
        // },
    }
}

//Selectors
// const selectCurrentPlaylist = (state) => {
//     const currentUserPlaylists = selectUserPlaylists(state);
//     const currentPlaylist = selectCurrentPlaylist(state);
//     return 
// }

//Exports
export const currentPlaylistSlice = createSlice(sliceOptions);
export default currentPlaylistSlice.reducer;