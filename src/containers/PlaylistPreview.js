import React, {Component} from 'react'

class PlaylistPreview extends Component {

    render() {
        // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
        const { id, name, description, owner, spotifyLink } = this.props.playlist;
        return(
            <div key={`playlist-${id}`}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{spotifyLink}</p>
                <p>id: {id}</p>
                <p>Owner: {owner}</p>
            </div>
        )
    }
}

export default PlaylistPreview