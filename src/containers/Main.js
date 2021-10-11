// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists

import React from 'react'


const Main = ({playlists}) => {
    

    return (
        <div>
            <h1>Main Page</h1>
            {playlists}
        </div>
    )
}

export default Main;