import React, {Component} from 'react';
import { connect, } from 'react-redux';
import { selectPlaylistByID } from '../redux/slices/userPlaylistsSlice'; 
import history from '../history';

class PlaylistPreview extends Component {

    handleViewDetails = (e) =>{
        const selectedPlaylistId = this.props.playlist.id
        console.log('view details for this playlist:', selectedPlaylistId);
        history.push(`/`);
        console.log('Logging `This`',this)
        this.setState({
            currentPlaylist: e.target.id
        });
        // this.props.dispatch({});
    }
    render() {
        //TODO: Fix issue with <p> tags in descrip:
            //<p>Enter another dimension of classical music with these atmospheric Sci-fi soundtracks. Twin playlist: <a href="spotify:user:spotify:playlist:37i9dQZF1DX0i61tT0OnnK">Space-themed Classical Music</a>.</p>
        // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
        const { id, name, description, owner, spotifyLink } = this.props.playlist;
        return(
            <div className='playlist-preview' key={`playlist-${id}`}>
                <h1 onClick={this.handleViewDetails}className='playlist-preview-name'>{name}</h1>
                <p className="playlist-description">{description ? description : '' }</p>
                <p>{spotifyLink}</p>
                <p>id: {id}</p>
                <p>Owner: {owner.display_name}</p>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectPlaylistById: (id) => dispatch(selectPlaylistByID(id)),
    }
}
export default connect(mapDispatchToProps)(PlaylistPreview);