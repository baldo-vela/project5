// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    currentUser,
    fetchUser,
    setAuthToken
} from "../redux/slices/userSlice"
import { Redirect } from 'react-router-dom'
//import { RootState } from '../redux/store'

//External Libraries
import { SpotifyAuth } from 'react-spotify-auth';
//Configuration File for Spotify
import { apiURL, clientURL, clientID, redirectUri, scopes, spotifyUserURL } from '../configurations/Spotify';

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';
import { fetchPlaylists } from '../redux/slices/userPlaylistsSlice';

const Login = (props) => {
    const dispatch = useDispatch();
    //Creates a user object from the redux store, then we will use the evaluated lifecycle values
    //const currentUser = useSelector((state: RootState) => state.currentUser.user);
    const user = props.user;
    const token = props.token;
    const userHasError = props.userHasError;
    const userError = props.userError;
    const userIsLoggedIn = props.userIsLoggedIn;
    const playlistsError = props.playlistsError;
    const playlistsHasError = props.playlistsHasError;

    const UserErrorWarning = (props) => {
        //ToDO: Add Error Handling
        //Return the error messages from the async actions for the render return
    }
    
    const tokenHandler = (token) => {
        //Note .trace outputs to the console with where the function is called
        console.log('authHandler recieving access token ', token);
        dispatch(setAuthToken(token))
        dispatch(fetchUser(token))
        dispatch(fetchPlaylists(token))
    }

    if (!userIsLoggedIn) { 
        //TODO: Implement better error handling and routing logic   
        return (
            <div className="login">
                <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
                {/* <UserErrorWarning error={user}/> */}

                <SpotifyAuth
                    redirectUri={clientURL}
                    clientID={clientID}
                    scopes={scopes}
                    onAccessToken={tokenHandler}
                    noCookie={true}
                />
            </div>
        );
    } else {
        return (
            <Redirect to="/main" />
        );
    }
    
}
const mapStateToProps = (state) => ({
    /* See: https://react-redux.js.org/using-react-redux/connect-mapstate 
    Let mapStateToProps Reshape the Data from the Store
    mapStateToProps Functions Should Be Fast
    mapStateToProps Functions Should Be Pure and Synchronous​ */
    user: state.userSliceReducer.user,
    token: state.userSliceReducer.authToken,
    userIsLoggedIn: state.userSliceReducer.isLoggedIn,
    userHasError: state.userSliceReducer.hasError,
    userError: state.userSliceReducer.userError,
    playlistsError: state.userPlaylistsReducer.error,
    playlistsHasError: state.userPlaylistsReducer.hasError,
})

export default connect(mapStateToProps)(Login);
