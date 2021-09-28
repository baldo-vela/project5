// Allows user to sign in with Spotify

//React Libraries
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    loginUser
} from "../redux/slices/userSlice"

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';

export const Login = () => {
    const dispatch = useDispatch();

    const apiResponseHandler = (resp) => {
        console.log(resp);
        //this.props.dispatch(setCurrentUser(resp));
    }
    
    return (
        <div className="login">
            <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
            <a href='#'
            onClick={() => dispatch(
                { type: 'loginClicked' }
                )}
            >
                Login with Spotify
            </a>
            
        </div>
    );
};

export default connect()(Login);
