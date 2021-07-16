import React from 'react'
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';
import { loginUrl } from '../configurations/Spotify'


// Allows user to sign in with Spotify
export default function SignIn() {
    
    return (
        <div className="login">
            <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
            <a href="http://localhost:8000/api/v1/login">Login with Spotify</a>
            
        </div>
    )

}
