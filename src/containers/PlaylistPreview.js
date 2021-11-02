import React, {Component} from 'react'

class PlaylistPreview extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
        }
    }
    // linkToPlayer = () =>{

    // }
    render() {
        // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
        const { id, name, description, owner, spotifyLink } = this.props.playlist;
        return(
            <card class='playlist-preview' key={`playlist-${id}`}>
                <h1><href class='playlist-preview-name'>{name}</href></h1>
                <p>{description}</p>
                <p>{spotifyLink}</p>
                <p>id: {id}</p>
                <p>Owner: {owner.display_name}</p>
            </card>
        )
    }
}

export default PlaylistPreview