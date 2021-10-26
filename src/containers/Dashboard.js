// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists

import React from 'react'
import faker from 'faker'
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import '../stylesheets/Dashboard.css'

// Dummy Data
const data = new Array(100).fill().map((value, id) => ({
     id: id, 
     title: faker.lorem.words(5), 
     body: faker.lorem.sentences(4) 
    }))

const Dashboard = ({}) => {
    
    const playlistItem = ({ index, key, style }) => (
        <div>
            <div key={key} style={style} className="playlist-preview">
                <h3>{`${data[index].title}-${data[index].id}`}</h3>
                <p>{data[index].body}</p>
            </div>
        </div>
       )

    return (
        <div
            className='dashboard'
            >
            <h1>Dashboard Page</h1>
            <AutoSizer>
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
            </AutoSizer>
        </div>
    );
}

export default Dashboard;