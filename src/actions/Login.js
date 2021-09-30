// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    loginUser
} from "../redux/slices/userSlice"

//External Libraries
import { SpotifyAuth } from 'react-spotify-auth';

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';

export const Login = () => {
    const dispatch = useDispatch();
    const apiURL = 'http://localhost:3001/api/v1/login'

    const apiResponseHandler = (resp) => {
        console.log(resp);
        //this.props.dispatch(setCurrentUser(resp));
    }
    const onClickHandler = () => {
        console.log('clicked');
        
    }
    const authHandler = async (resp) => {
        await console.log(resp);
    }
    
    return (
        <div className="login">
            <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
            {/* <a href={apiURL}
                 onClick={() => onClickHandler()}
            >
                Login with Spotify
            </a> */}
            <SpotifyAuth
                redirectUri={apiURL}
                clientID={clientID}
                scopes={scopes}
                onAccessToken={this.authHandler}
            />
            
        </div>
    );
};

export default connect()(Login);
