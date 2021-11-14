// A list of the signed in users's Playlists from Spotify
// Ideally states the username, their user icon, and their playlists
import React, { useEffect,} from 'react'

//For Rendering the list of playlists
//import { FixedSizeList as List } from 'react-window';
//import AutoSizer from 'react-virtualized-auto-sizer';

import '../stylesheets/Dashboard.css'
import {  
    useDispatch, 
    useSelector 
} from 'react-redux';

import PlaylistPreview from './PlaylistPreview';
import { clearPlaylistId } from "../redux/slices/currentPlaylistSlice"
import { useHistory } from 'react-router-dom';

//MUI imports
// import { makeStyles } from "@mui/styles";
// import Container from "@mui/material/Container"
// const useStyles = makeStyles({
//     container: {
//         position: "relative"
//     }
// });

// // For Containing the list of playlists
// const PlaylistContainer = (props) => {
//     const classes = useStyles();
//     return <Container maxWidth="sm" className={classes.container} {...props} />;
// };

function Dashboard() {
    const playlists = useSelector((state) => state.userPlaylistsReducer.playlists.items);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        //Clears the detail view playlist Id register just in case
        dispatch(clearPlaylistId);
    });


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