import React from 'react'
import SplashLogo from './assets/images/animated_splash.gif'


// Allows user to sign in with Spotify
function SignIn() {
    //TODO: Add Spotify sign in
    return (
        <div className="login">
            <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
            <a href='#'>Login with Spotify</a>
            
        </div>
    )

}
export default SignIn