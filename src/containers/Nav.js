import React from 'react';
import Logo from '../assets/images/gh_logo.png'

function Nav() {
    return(
        <div className='nav'>
            <ul className='nav-links'>
                <li>{Logo}</li>
                <li>My Playlists</li>
                <li>User Name</li>
                <li>Logout</li>

            </ul>
        </div>
        )
}


export default Nav;