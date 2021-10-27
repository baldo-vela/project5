// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    currentUser,
    fetchUser,
    setAuthToken
} from "../redux/slices/userSlice"
//import { RootState } from '../redux/store'

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
    //Creates a user object from the redux store, then we will use the evaluated lifecycle values
    //const currentUser = useSelector((state: RootState) => state.currentUser.user);

    
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
const mapStateToProps = (state) => ({
    user: state.userSliceReducer.user,
    token: state.userSliceReducer.authToken,
    userHasError: state.userSliceReducer.hasError,
    userError: state.userSliceReducer.userError,
    playlistsError: state.userPlaylistsReducer.error,
    playlistsHasError: state.userPlaylistsReducer.hasError,
})

export default connect(mapStateToProps)(Login);
