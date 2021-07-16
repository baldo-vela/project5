import { createSlice } from "@reduxjs/toolkit";
/*  User id: 1, 
    name: "moleculetycoon", 
    email: nil, 
    href: "https://api.spotify.com/v1/users/moleculetycoon", 
    country: "US", 
    spotify_url: "https://open.spotify.com/user/moleculetycoon", 
    spotify_id: "moleculetycoon", 
    spotify_access_token: [FILTERED], 
    spotify_refresh_token: [FILTERED], 
    uri: "spotify:user:moleculetycoon", 
    image_url: "https://i.scdn.co/image/ab6775700000ee855740709a5b...", 
    created_at: "2021-07-16 01:45:30.488108000 +0000", 
    updated_at: "2021-07-16 02:15:29.123883000 +0000">] */

const initialState = {}

const userSlices = createSlice({
    name: "user",
    initialState: {
        user_id: '',
        spotify_id: '',
        email: '',
        href: '',
        country: '',
        spotify_url: '',
        spotify_id: '',
        spotify_access_token: '',
        spotify_refresh_token: '',
        uri: '',
        image_url: '',
        created_at: '',
        updated_at: '',
        },
    reducers: {
        setUserId: (state, action) => {
            state.user_id = action.payload
        },
        setSpotifyId: (state, action) => {
            state.spotify_id = action.payload
        },

    }
});