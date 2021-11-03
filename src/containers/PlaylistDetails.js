import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../components/Player';

const PlaylistDetails = (props) => {
    // const location = useLocation();
    console.log("Logging Props", props);
    const currentPlaylistId = props.match.params.id;
    console.log("CurrentPlaylistId:", currentPlaylistId);
    const currentPlaylist = useSelector((state) => state.userPlaylistsReducer.playlists.items.find(p => p.id === currentPlaylistId))
    console.log("Current Playlist", currentPlaylist)
    const authToken = useSelector((state)=> state.userSliceReducer.authToken)
    
    return (     
        <div className='playlist-details'>
            <div className='playlist-details_header'>
                <div className='playlist-details_header_title'>
                    <h1>{currentPlaylist.name}</h1>    
                </div>
                <div className='playlist-details_header_subtitle'>
                    {currentPlaylist.description}
                </div>
                <div className='playlist-details-player'>
                    <Player authToken={authToken} playlistUri={currentPlaylist.uri}/>
                </div>
            </div>
        </div>
    )
    
}
export default PlaylistDetails;