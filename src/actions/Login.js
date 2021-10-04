// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    loginUser
} from "../redux/slices/userSlice"

//External Libraries
import { SpotifyAuth } from 'react-spotify-auth';
//Configuration File for Spotify
import { apiURL, clientURL, clientID, redirectUri, scopes } from '../configurations/Spotify';

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';

export class Login extends React.Component {
    // dispatch = useDispatch();
    

    apiResponseHandler = (resp) => {
        console.log(resp);
        //this.props.dispatch(setCurrentUser(resp));
    }
    onClickHandler = () => {
        console.log('clicked');
        
    }
    authHandler = async (resp) => {
        await console.log(resp);
    }
    render() {
        return (
            <div className="login">
                <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
                <a href={apiURL}
                    onClick={() => this.onClickHandler()}
                >
                    Login with Spotify
                </a>
                {/* <SpotifyAuth
                    redirectUri={clientURL}
                    clientID={clientID}
                    scopes={scopes}
                    onAccessToken={this.authHandler}
                /> */}
                
            </div>
        );
    }
};

export default connect()(Login);
