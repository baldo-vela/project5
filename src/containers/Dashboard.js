// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists

import React from 'react'

//For creating dummy data
import faker from 'faker'

//For Rendering the list of playlists
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import PlaylistPreview from './PlaylistPreview';

import '../stylesheets/Dashboard.css'
import { connect, useSelector, } from 'react-redux';

// Dummy Data
const data = new Array(100).fill().map((value, id) => ({
     id: id, 
     title: faker.lorem.words(5), 
     body: faker.lorem.sentences(4) 
    }))

const Dashboard = (props) => {
    //Selects the user's playlists from the Redux store
    const playlists = props.playlists.map(playlist => <PlaylistPreview playlist={playlist}/>);

    const playlistItem = ({ index, key, style }) => (
        <div>
            <div key={key} style={style} className="playlist-preview">
                <h3>{`${data[index].title}-${data[index].id}`}</h3>
                <p>{data[index].body}</p>
            </div>
        </div>
    )

    //const playlistList = playlists.items.map((playlist) => ();


    return (
        <div
            className='dashboard'
            >
            <h1>Dashboard Page</h1>
            {/* <AutoSizer>
                {({ height, width }) => (
                        <List
                            height={height}
                            itemCount={20}
                            itemSize={120}
                            width={width}
                        >
                            {playlistItem}
                        </List>
                )
                }
                
            </AutoSizer> */}
            <div>
                <h2>Your Playlists</h2>
                {/* {playlistList}     */}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        //Note playlists is an object with keys:
        // href, items[] (max length 20), limit, next, offset, previous, total
        playlists: state.userPlaylistsReducer.playlists,
        isLoading: state.userPlaylistsReducer.isLoading,
        // hasError: state.userPlaylistsReducer.hasError,
        // errorMessage: state.userPlaylistsReducer.error,
    }
}

export default connect(mapStateToProps)(Dashboard);