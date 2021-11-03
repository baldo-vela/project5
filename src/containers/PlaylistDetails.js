import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';

import { useLocation } from 'react-router-dom';

function PlaylistDetails() {
    const location = useLocation();
    console.log(location);
    // Selects the playlist from the redux store using the id from the url

    
    return (      
        <div className='playlist-details'>
            <div className='playlist-details_header'>
                <div className='playlist-details_header_title'>
                    <h1>Detail View</h1>
                    
                </div>
                <div className='playlist-details_header_subtitle'>
                    {/* {playlist.description} */}
                </div>
                <div className='playlist-details-player'>
                    <Player />
                </div>
            </div>
        </div>
    )
    
}
export default PlaylistDetails;