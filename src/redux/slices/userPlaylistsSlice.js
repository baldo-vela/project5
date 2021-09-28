import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/* 
    // Pure Javascript
    fetchPlaylists = (shouldRetry=true) => {
        console.log('fetching playlists')
        return fetch(playlistAPI, {
        headers: {

        'Authorization': 'Bearer ' + this.state.users[1].access_token
        }
    })
    .then(res => res.json())
    .then(data => {
      console.log('playlists data', data)
      if (data.error && shouldRetry) {
        this.refreshToken()
      } else {
        console.log('setting playlists state')
        this.setState({playlists: data})
      }
    })
    .then(data => this.createPlaylist())
  }

  // Async Redux Thunk
    async fucntion fetchPlaylists() {
        console.log("fetching playlists");
        const response = await fetch(playlistAPI, {

    }
*/

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
    [loadPlaylists.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPlaylists.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
  }
}
};
//Creates the userPlaylists slice for currentUser from sliceOptions
export const userPlaylistsSlice = createSlice(sliceOptions);