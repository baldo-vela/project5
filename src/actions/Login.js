// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    currentUser,
    fetchUser,
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

const Login = () => {
    const dispatch = useDispatch();
    //const { hasError } = useSelector((state) => state.currentUser);

    
    const tokenHandler = (token) => {
        //Note .trace outputs to the console with where the function is called
        console.log('authHandler recieving access token ', token);
        //TODO Fix Setting the token in the state
        dispatch(setAuthToken(token))
        dispatch(fetchUser(token))
        dispatch(fetchPlaylists(token))
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

export default Login;
