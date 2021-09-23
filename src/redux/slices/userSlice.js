import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUrl } from '../../configurations/Spotify';
/*  User id: 1, 
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
    updated_at: "2021-07-16 02:15:29.123883000 +0000">] */

export const loginUser = createAsyncThunk(
  "user/login",
  async () => {
      console.log('Fetching User Login from:', loginUrl)
      const data = await fetch(loginUrl);
      const json = await data.json();
      return json;
  }
);

const sliceOptions = {
    name: "currentUserReducer",
    initialState: {
        playlists: [],
        isLoggedIn: false,
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = true;
            state.hasError = false;
        },
        [loginUser.fulfilled]: (state, action) => {
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

const initialState = {}
//TODO: Refactor this to be included in a single Root Reducer call
const userSlice = createSlice({
    name: "user",
    initialState: {
        user_id: '',
        spotify_id: '',
        email: '',
        href: '',
        country: '',
        spotify_url: '',
        spotify_access_token: '',
        spotify_refresh_token: '',
        uri: '',
        image_url: '',
        created_at: '',
        updated_at: '',
        isLoading: false,
        hasError: false
        },
    reducers: {
        setCurrentUser: (state, action) => {
            state.user_id = action.payload.user_id;
            state.spotify_id = action.payload.spotify_id;
            state.email = action.payload.email;
            state.href = action.payload.href;
            state.country = action.payload.country;
            state.spotify_url = action.payload.spotify_url;
            state.spotify_access_token = action.payload.spotify_access_token;
            state.spotify_refresh_token = action.payload.spotify_refresh_token;
            state.uri = action.payload.uri;
            state.image_url = action.payload.image_url;
            state.created_at = action.payload.created_at;
            state.updated_at = action.payload.updated_at;
        },
        setUserId: (state, action) => {
            state.user_id = action.payload
        },
        setSpotifyId: (state, action) => {
            state.spotify_id = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setHref: (state, action) => {
            state.href = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
        setSpotifyUrl: (state, action) => {
            state.spotify_url = action.payload
        },
        setSpotifyAccessToken: (state, action) => {
            state.spotify_access_token = action.payload
        },
        setSpotifyRefreshToken: (state, action) => {
            state.spotify_refresh_token = action.payload
        },
        setUri: (state, action) => {
            state.uri = action.payload
        },
        setImageUrl: (state, action) => {
            state.image_url = action.payload
        },
        setCreatedAt: (state, action) => {
            state.created_at = action.payload
        }, 
        setUpdatedAt: (state, action) => {
            state.updated_at = action.payload
        }

    }
});

export default userSlice.reducer