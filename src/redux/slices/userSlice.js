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
/* async const fetchUser {
    try {
        //console.log("Fetching user...", token);
        let resp = await fetch(spotifyUserURL, 
            {
                body: null,
                headers: {
                    'Authorization': "Bearer " + token,
                    'Content-Type': 'application/json'
                },
                // method: 'GET',
                // mode: 'cors',
            }
        );
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }
        let data = await resp.json();
        console.log("User Fetched");
        console.log(data);
    } catch (error) {
        console.trace(error);
    }
}; */
// #createAsyncThunk requires 3 parameters:
    // a string action type representing the lifecycle of the async request
    // a payload creator callback function that returns a promise containing the result of some async logic, possibly with a value synchronously. It is a function that contains all the logic needed to compute an appropirate result. This can include an AJAX data fetch, multiple AJAX calls, interactions with React Native storage, etc.
    // The payload creator will be called with two arguments:
        // 'arg' containing the first parameter that was passed to the thunk action creator when it was dispatched. This is useful for passing in values like item IDs that may be needed as part of the request. If you need to pass in multiple values, pass them together in an object when you dispatch the thunk, like dispatch(fetchUsers({status: 'active', sortBy: 'name'})).
        // 'thunkAPI:' an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options:

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (authToken, thunkAPI) => {
      console.trace('Fetching User from Spotify API: ', spotifyUserURL)
      const data = await fetch(spotifyUserURL,
        {
            body: null,
            headers: {
                'Authorization': "Bearer " + authToken,
                'Content-Type': 'application/json'
            },
        });
      const json = await data.json();
      console.log(json);
      return json;
  }
);
//Addtional Note: Yes RTK Query library can eliminate the need for writing data fetching thunks, but that's obfuscating things even more.

const sliceOptions = {
    name: "currentUser",
    initialState: {
        authToken: null,
        expiresIn: null,
        user: {},
        isLoggedIn: false,
        isLoading: false,
        hasError: false,
        error: null,
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
        [fetchUser.pending]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchUser.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.hasError = true;
        }
    }
}
//Exports the slice
// #createSlice is a function that takes an object of options and returns a reducer function.
export const userSlice = createSlice(sliceOptions);


export const { setAuthToken, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUserLoginStatus = (state) => state.isLoggedIn;