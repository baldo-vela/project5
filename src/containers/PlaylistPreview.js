import React, {Component} from 'react';
import history from '../history';

class PlaylistPreview extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
        }
    }
    viewDetails = () =>{
        console.log('view details for this playlist:', this.props.playlist.id);
        history.push(`/playlist/${this.props.playlist.id}`);
    }
    render() {
        //TODO: Fix issue with <p> tags in descrip:
            //<p>Enter another dimension of classical music with these atmospheric Sci-fi soundtracks. Twin playlist: <a href="spotify:user:spotify:playlist:37i9dQZF1DX0i61tT0OnnK">Space-themed Classical Music</a>.</p>
        // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
        const { id, name, description, owner, spotifyLink } = this.props.playlist;
        return(
            <div className='playlist-preview' key={`playlist-${id}`}>
                <h1><href onClick={this.viewDetails}className='playlist-preview-name'>{name}</href></h1>
                <p>{description ? description : '' }</p>
                <p>{spotifyLink}</p>
                <p>id: {id}</p>
                <p>Owner: {owner.display_name}</p>
            </div>
        )
    }
}

export default PlaylistPreview