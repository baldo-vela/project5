// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists

import React from 'react'

//For creating dummy data
// import faker from 'faker'

//For Rendering the list of playlists
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import '../stylesheets/Dashboard.css'
import { connect, dispatch } from 'react-redux';
import PlaylistPreview from './PlaylistPreview';
import { render } from 'react-dom';

//Dummy Data
// const data = new Array(100).fill().map((value, id) => ({
//      id: id, 
//      title: faker.lorem.words(5), 
//      body: faker.lorem.sentences(4) 
//     }))

class Dashboard extends React.Component{
    //Selects the user's playlists from the Redux store
    //const playlists = props.listOfPlaylists;
    // console.log(props);
    // //TODO: Add a loading state
    // //ToDo: Add an error state
    // //TODO: use dispatch to update the Redux store with the user's playlists dynamically as they scroll though using infinite loader extension
    // //TODO: implement infinite scroll extension D:
    // console.log('Displaying Props for Dashboards: ',props.playlists);
    // const testPlaylists = Object.values(props.playlists);
    // console.log('Testing Playlists:', testPlaylists);
    // testPlaylists.map(p => {
    //     console.log(p.id);
    //     console.log(p.name);
    //     console.log(p.description);
    //     console.log(p.href);
    //     console.log(p.owner.display_name);
    // });
    

    // // This is for testing the Auto-Sizer, and left here for reference
    // const playlistItem = ({ index, key, style }) => (
    //     <div>
    //         <div key={key} style={style} className="playlist-preview">
    //             <h3>{`${data[index].title}-${data[index].id}`}</h3>
    //             <p>{data[index].body}</p>
    //         </div>
    //     </div>
    // )

    render(){
        if (this.props.playlists=== undefined){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        console.log('Props for Dashboard',this.props);
        const playlists = this.props.playlists;
        console.log('Playlists:', playlists);
        let listOfPlaylists = playlists.map(p =>
            <PlaylistPreview key={p.id} playlist={p} />
        );


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
                    {listOfPlaylists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //Note: playlists is an object with keys:
            // href, items[] (max length 20), limit, next, offset, previous, total
        playlists: state.userPlaylistsReducer.playlists.items,
        isLoading: state.userPlaylistsReducer.isLoading,
        authToken: state.userSliceReducer.authToken,
        // hasError: state.userPlaylistsReducer.hasError,
        // errorMessage: state.userPlaylistsReducer.error,
    }
}

export default connect(mapStateToProps)(Dashboard);