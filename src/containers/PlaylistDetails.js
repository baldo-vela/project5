import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../components/Player';
//Material UI imports
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: "100%"
        },
        card: {
            padding: "6px"
        },
    }))

const PlaylistDetails = (props) => {
    //Intialization Debugging
    console.log("Logging Props", props);
    const currentPlaylistId = props.match.params.id;
    console.log("CurrentPlaylistId:", currentPlaylistId);
    const currentPlaylist = useSelector((state) => state.userPlaylistsReducer.playlists.items.find(p => p.id === currentPlaylistId))
    console.log("Current Playlist", currentPlaylist)
    const authToken = useSelector((state)=> state.userSliceReducer.authToken)
    
    //Material UI implementation
    const clases = useStyles();
    const loading = useSelector((state) => state.userPlaylistsReducer.isLoading);
    // return (     
    //     <div className='playlist-details'>
    //         <div className='playlist-details_header'>
    //             <div className='playlist-details_header_title'>
    //                 <h1>{currentPlaylist.name}</h1>    
    //             </div>
    //             <div className='playlist-details_header_subtitle'>
    //                 {currentPlaylist.description}
    //             </div>
    //             <div className='playlist-details-player'>
    //                 <Player authToken={authToken} playlistUri={currentPlaylist.uri}/>
    //             </div>
    //             <div className='track-list'>


    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <Box className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title={
                        `${currentPlaylist.name}`
                    }
                    subheader={
                        `Owner: ${currentPlaylist.owner.display_name}`
                    }
                />
                <CardContent>
                    <Typography>
                        `${currentPlaylist.description}`
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
    
}
export default PlaylistDetails;