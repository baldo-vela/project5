//React Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Stylesheet for this component
import SplashLogo from '../assets/images/animated_splash.gif';
import '../stylesheets/Login.css';

// Sample Response
/*
    image_url	"https://i.scdn.co/image/ab6775700000ee855740709a5b74dbaa09a22c14"
    country	"US"
    id	2
    name	"foo"
    email	null
    href	"https://api.spotify.com/v1/users/foo"
    spotify_url	"https://open.spotify.com/user/foo"
    spotify_id	"foo"
    spotify_access_token	"BQBkNblWpH4lyXtu7rWw52c6…Lef_PjshHVUlUWk71qMsMYU"
    spotify_refresh_token	"AQA_-ty8zy-Alha-PpfQI_4ltPzmufy_JC1JbE5UuXdmfsSnC5wjDiR-274Vn9dy-2f0uXemGomkP3HzBj1mmFdRyorJRcmY_mM_5BZ6W67ALEnglpTaufJgfe1XgitEcK8"
    uri	"spotify:user:foo"
    created_at	"2021-09-21T20:27:27.652Z"
    updated_at	"2021-09-23T17:09:06.306Z" 
*/

// Slice of state to update
// import { setCurrentUser } from '../reducers/currentUser';


// Allows user to sign in with Spotify
export class Login extends Component{
    apiResponseHandler = (resp) => {
        console.log(resp);
        //this.props.dispatch(setCurrentUser(resp));
    }
    
    render() {
        return (
            <div className="login">
                <img src={SplashLogo} alt="Animated Greatest Hits Logo" />
                <a href='http://localhost:3001/api/v1/login'>Login with Spotify</a>
                
            </div>
        )
    }
}

export default connect()(Login);
