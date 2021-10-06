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
    

    // async apiResponseHandler() {
    //     try{
    //         let resp = await fetch('http://localhost:3001/api/v1/login', 
    //             {   
    //                 body: null,
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 },
    //                 method: 'POST',
    //                 mode: 'cors',
    //                 redirect: 'follow'
    //             }
    //         ); 
    //         if(!resp.ok) {
    //             throw new Error(resp.statusText);
    //         }
    //         console.log(resp);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     //this.props.dispatch(setCurrentUser(resp));
    // }
    // onClickHandler = () => {
    //     console.log('clicked');
    //     this.apiResponseHandler();        
    // }

    authHandler = (token) => {
        //Note .trace ouputs to the console with where the function is called
        console.trace('authHandler recieving access token ', token);
    }

    render() {
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
                    onAccessToken={this.authHandler}
                />
            </div>
        );
    }
};

export default connect()(Login);
