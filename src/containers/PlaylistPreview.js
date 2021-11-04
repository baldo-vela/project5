import React from 'react';
import { useHistory } from 'react-router-dom';
//Material UI Imports
import { createStyles, makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/materials/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/materials/MoreVert";
// import Skeleton from "@mui/materialSkeleton";

//MUI Style
const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: "100%"
        },
        card: {
            padding: "16px"
        },
    }))

const PlaylistPreview = (props) => {
    const history = useHistory();
    //TODO: replace this with a working timeout based selector
    const loading = false;
    //MUI styling hook
    const classes = useStyles();

    //Handles when a User clicks on a preview object to trigger the detail view
    const handleViewDetails = (e) =>{
        const selectedPlaylistId = props.playlist.id;
        console.log('view details for this playlist:', selectedPlaylistId);
        history.push(`/playlist/${selectedPlaylistId}`);
    }
    //TODO: Fix issue with <p> tags in descrip:
        //<p>Enter another dimension of classical music with these atmospheric Sci-fi soundtracks. Twin playlist: <a href="spotify:user:spotify:playlist:37i9dQZF1DX0i61tT0OnnK">Space-themed Classical Music</a>.</p>
    // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
    const { id, name, description, owner, spotifyLink, style } = props.playlist;
    return(
        <div key={`playlist-${id}`}>
            <Box style={style} className={classes.root}>
                <Card className={classes.card} onClick={handleViewDetails}>
                    <CardHeader
                        title={
                            `${name}`
                        }
                        subheader={
                            `Owner: ${owner.display_name}` 
                        }
                    />
                    <CardContent>
                        <Typography>
                            {description ? description : '' }
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {loading ? null : (
                            <>
                                <IconButton aria-label="share">
                                    <ShareIcon onClick={()=>history.push(`https://open.spotify.com/track/${id}`)}/>
                                </IconButton>
                            </>
                        )}
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default PlaylistPreview;