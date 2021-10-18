// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    currentUser,
    fetchUser,
    loginUser, 
    setAuthToken
} from "../redux/slices/userSlice"

//External Libraries
import { SpotifyAuth } from 'react-spotify-auth';
//Configuration File for Spotify
import { apiURL, clientURL, clientID, redirectUri, scopes, spotifyUserURL } from '../configurations/Spotify';

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';
import { fetchPlaylists } from '../redux/slices/userPlaylistsSlice';

export const Login = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         token: null,
    //         error: null,
    //         loading: false,
    //         user: [],
    //         playlists: [],
    //     };
    // }
    const dispatch = useDispatch();
    //const { hasError } = useSelector((state) => state.currentUser);

    /* async fetchUser(token) {
        // Fetches user from the Spotify API
        // TODO push user from Spotify to our backend
        // TODO - Set the current user in the Redux store
        
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
    } */
    // async fetchPlaylists(token) {
    //     // Fetches user's playlists from the Spotify API
    //     // TODO push user's playlists from Spotify to app Store
    //     try {
    //         let resp = await fetch(spotifyUserURL + "/playlists", 
    //             {
    //                 body: null,
    //                 headers: {
    //                     'Authorization': "Bearer " + token,
    //                     'Content-Type': 'application/json'
    //                 },
    //             }
    //         );
    //         if(!resp.ok) {
    //             throw new Error(resp.statusText);
    //         }
    //         let data = await resp.json();
    //         console.log("Playlists Fetched");
    //         console.log(data);

    //     } catch (error) {
    //         console.trace(error);
    //     }
    // }

    const tokenHandler = (token) => {
        //Note .trace ouputs to the console with where the function is called
        console.log('authHandler recieving access token ', token);
        //TODO Fix Setting the token in the state
        dispatch(setAuthToken(token))
        dispatch(fetchUser(token))
        dispatch(fetchPlaylists(token))

        //this.fetchUser(token);
        //this.fetchPlaylists(token);
        
    }


        return (
            <div className="login">
                <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
                {/* <a href='#'
                    onClick={() => this.onClickHandler()}
                >
                    Login with Spotify
                </a> */}
                <SpotifyAuth
                    redirectUri={clientURL}
                    clientID={clientID}
                    scopes={scopes}
                    onAccessToken={tokenHandler}
                    noCookie={true}
                />
            </div>
        );
    
}

export default connect()(Login);
