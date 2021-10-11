// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists

import React from 'react'
import faker from 'faker'
import { FixedSizeList as List } from 'react-window';

// Dummy Data
const data = new Array(100).fill().map((value, id) => ({
     id: id, 
     title: faker.lorem.words(5), 
     body: faker.lorem.sentences(4) 
    }))

const Main = ({}) => {
    
    const Row = ({ index, key, style }) => (
        <div>
            <div key={key} style={style} className="post">
                <h3>{`${data[index].title}-${data[index].id}`}</h3>
                <p>{data[index].body}</p>
            </div>
        </div>
       )

    return (
        <div>
            <h1>Main Page</h1>
            <List
                width={1400}
                height={700}
                itemCount={data.length}
                itemSize={120}
            >
                {Row}
            </List>
        </div>
    );
}

export default Main;