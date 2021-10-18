// RTK imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Configuration
import { spotifyUserURL } from "../../configurations/Spotify";

export const fetchPlaylists = createAsyncThunk(
  "userPlaylists/fetchStatus",
  async (authToken, thunkAPI) => {
    console.trace('Fetching Playlists for current User from Spotify: ',spotifyUserURL);
    const data = await fetch( spotifyUserURL + "/playlists",
      {
        body: null,
            headers: {
                'Authorization': "Bearer " + authToken,
                'Content-Type': 'application/json'
            }
      });
      const json = await data.json();
      console.log(json)
      return json;
  }
)


//Long format to list out all the slice options for this slice
const sliceOptions = {
  name: "userPlaylists",
  initialState: {
    playlists: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
  
  },
  extraReducers: {
    [fetchPlaylists.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPlaylists.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
  }
}
};
//Creates the userPlaylists slice for currentUser from sliceOptions
export const userPlaylistsSlice = createSlice(sliceOptions);
export default userPlaylistsSlice.reducer