import React, {Component} from 'react';
import { connect, } from 'react-redux';
import { selectPlaylistByID } from '../redux/slices/userPlaylistsSlice'; 
import { useHistory } from 'react-router-dom';

const PlaylistPreview = (props) => {
    const history = useHistory();

    const handleViewDetails = (e) =>{
        const selectedPlaylistId = props.playlist.id;
        console.log('view details for this playlist:', selectedPlaylistId);
        history.push(`/playlist/${selectedPlaylistId}`);
    }
    //TODO: Fix issue with <p> tags in descrip:
        //<p>Enter another dimension of classical music with these atmospheric Sci-fi soundtracks. Twin playlist: <a href="spotify:user:spotify:playlist:37i9dQZF1DX0i61tT0OnnK">Space-themed Classical Music</a>.</p>
    // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
    const { id, name, description, owner, spotifyLink } = props.playlist;
    return(
        <div className='playlist-preview' key={`playlist-${id}`}>
            <h1 onClick={handleViewDetails}className='playlist-preview-name'>{name}</h1>
            <p className="playlist-description">{description ? description : '' }</p>
            <p>{spotifyLink}</p>
            <p>id: {id}</p>
            <p>Owner: {owner.display_name}</p>
        </div>
    )
}

export default PlaylistPreview;