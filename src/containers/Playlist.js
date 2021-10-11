// Top Heading: Playlist Name
// Description
// ?Spotify Likes
// Number of Tracks
// Duration
// Numbered List of Track objects
// Comments

import React, {Component} from 'react'

class Playlist extends Component {
    constructor(props){
        super(props)

    }

    render() {
        const { title, description} = this.props.playlist;
        return(
            <div id="playlist">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}