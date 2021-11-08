import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import currentPlaylistSlice, { setPlaylistId, clearPlaylistId } from "../redux/slices/currentPlaylistSlice"
import Player from '../components/Player';
//TODO: Import the container of all the notes for this playlist
import CurrentNotes from '../components/CurrentNotes';

const PlaylistDetails = (props) => {
    // const location = useLocation();
    const dispatch = useDispatch();
    //New WIP clears the associated store entry on the currently viewed playlist Id
    //dispatch(clearPlaylistId());
    console.log("Logging Props", props);
    const currentPlaylistId = props.match.params.id;
    console.log("CurrentPlaylistId:", currentPlaylistId);
    const currentPlaylist = useSelector((state) => state.userPlaylistsReducer.playlists.items.find(p => p.id === currentPlaylistId))
    console.log("Current Playlist", currentPlaylist)
    const authToken = useSelector((state)=> state.userSliceReducer.authToken)
    useEffect (() => {
        //dispatch(clearPlaylistId);
        //dispatch(setPlaylistId(currentPlaylistId));

    });
    
    
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
                <div className='track-list'>
                    {/* TODO: list of Tracks goes here */}

                </div>
                <div className='playlist-notes-container'>
                    {/* TODO: Outfit this with the components necessary to render, make, edit, and delete notes */}
                    <CurrentNotes playlistId={currentPlaylist.id}/>
                </div>
            </div>
        </div>
    )
    
}
export default PlaylistDetails;