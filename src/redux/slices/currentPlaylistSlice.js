import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectUserPlaylists, selectPlaylistByID } from './userPlaylistsSlice';
import { playlistsApi } from '../../globals'

//Note: the extra lifecycle booleans are for expansion
const initialState = {
    currentPlaylistId: null,
    currentPlaylist: [],
    isLoading: false,
    hasError: false,
    error: null,
}

// See https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features
// Pass this your current auth token and the id of the track
export const fetchTrackFeatures = createAsyncThunk(
    "currentTrackFeatures/fetchStatus",
    async ({authToken, id}, thunkAPI) => {
        console.trace('Fetching Track Features Bearing:', {authToken, id});
        const data = await fetch("https://api.spotify.com/v1/audio-features/" + id,
            {
                body: null,
                headers: {
                    'Authorization': "Bearer" + authToken,
                    'Content-Type': 'application/json'

                }
            });
        const json = await data.json();
        //TODO: Remove this in Prod
        console.log("Spotify Returned:", json);
        return json;
    }
)

//Post the ID of a playlist to the Backend for retention
export const postPlaylist = createAsyncThunk(
    "currentPlaylist/postStatus",
    async (playlistId, thunkAPI) => {
        console.trace('Posting Playlist:', playlistId);
        const request = {
            body: JSON.stringify({spotify_id: playlistId}),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            method: "POST"
        }
        console.log("Post Request:", request);
        const resp = await fetch(`${playlistsApi}`, request );
        const json = await resp.json();
        console.log("Rails Server Responded to Request with:", json);
        return json;
    }
)



//Slice Object

const sliceOptions = {
    name: "currentPlaylist",
    initialState: initialState,
    reducers: {
        setPlaylistId: (state, action) => {
            state.currentPlaylistId = action.payload;
        },
        clearPlaylistId: (state) => {
            state.currentPlaylistId = "";
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
        // [postPlaylist.pending]: (state) => {
        //     state.isLoading = true;
        //     state.hasError = false;
        //   },
        // [postPlaylist.fulfilled]: (state, action) => {
        //     state.playlists = action.payload;
        //     state.isLoading = false;
        //     state.hasError = false;
        // },
        // [postPlaylist.rejected]: (state) => {
        //     state.isLoading = false;
        //     state.hasError = true;
        // },
    }
}

//Selectors
export const selectCurrentPlaylist = (state) => {
    const currentUserPlaylists = selectUserPlaylists(state);
    const currentPlaylist = selectCurrentPlaylist(state);
    return 
}

//Exports
export const currentPlaylistSlice = createSlice(sliceOptions);
export default currentPlaylistSlice.reducer;

//Exports the actions to the application
export const {
    setPlaylistId,
    clearPlaylistId,
} = currentPlaylistSlice.actions;