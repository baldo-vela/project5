// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists
import React from 'react'

//For Rendering the list of playlists
//import { FixedSizeList as List } from 'react-window';
//import AutoSizer from 'react-virtualized-auto-sizer';

import '../stylesheets/Dashboard.css'
import {  
    // dispatch, 
    useSelector 
} from 'react-redux';

import PlaylistPreview from './PlaylistPreview';
import { useHistory } from 'react-router-dom';

function Dashboard() {
    const playlists = useSelector((state) => state.userPlaylistsReducer.playlists.items);
    const history = useHistory();

//TODO: use dispatch to request updates to the Redux store with the user's playlists dynamically as they scroll though using infinite loader extension
//TODO: implement infinite scroll extension D:

    console.log('Current Playlists from Store')
    return ( 
        <div
            className='dashboard'
            >
            <h1>Dashboard Page</h1>
            <div>
                <h2>Your Playlists</h2>
                {/* TODO: Review optional chaining opperator in MDN */}
                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining*/}
                {playlists?.length && playlists.map(p=> <PlaylistPreview playlist={p}/>)}
            </div>
        </div>
    )

}


export default Dashboard;