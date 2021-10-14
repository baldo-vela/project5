import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// TODO rewrite this to reference our Rails API backend
import { spotifyUserURL } from '../../configurations/Spotify';


/*  Sample User Data:
    User id: 1, 
    name: "foo", 
    email: nil, 
    href: "https://api.spotify.com/v1/users/foo", 
    country: "US", 
    spotify_url: "https://open.spotify.com/user/foo", 
    spotify_id: "foo", 
    spotify_access_token: [FILTERED], 
    spotify_refresh_token: [FILTERED], 
    uri: "spotify:user:foo", 
    image_url: "https://i.scdn.co/image/ab6775700000ee855740709a5b...", 
    created_at: "2021-07-16 01:45:30.488108000 +0000", 
    updated_at: "2021-07-16 02:15:29.123883000 +0000">] 
*/

//Gets the current user from the Spotify API
export const loginUser = createAsyncThunk(
  "user/loginStatus",
  async (authToken, thunkAPI) => {
      console.trace('Fetching User from Spotify API: ', spotifyUserURL)
      const data = await fetch(spotifyUserURL);
      const json = await data.json();
      console.table(json);
      return json;
  }
);

const sliceOptions = {
    name: "currentUser",
    initialState: {
        authToken: null,
        playlists: [],
        user: {},
        isLoggedIn: false,
        isLoading: false,
        hasError: false,
    },
    reducers: {
        setAuthToken(state, action) {
            state.authToken = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = true;
            state.hasError = false;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.hasError = false;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.hasError = true;
        }
    }
}
export const userSlice = createSlice(sliceOptions);

export const {setAuthToken, setCurrentUser } = userSlice.actions;
export default userSlice.reducer