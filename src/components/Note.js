import React from "react";
import { 
    // useDispatch 
} from "react-redux";
//MUI Imports
// import { createStyles, makeStyles } from '@mui/styles';
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import DeleteOutlined from '@mui/icons-material//DeleteOutlined'
import Typography from "@mui/material/Typography";
import { ClassNames } from "@emotion/react";
import { IconButton } from "@mui/material";


const Note = ({ note, handleDelete }) => {
    
    return (
        <Card
            eleveation={1}
            className={ClassNames.card}
            variant="outlined"
        >
            <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                subheader={note.username}
            >
            </CardHeader>
            <CardContent>
                <Typography>
                    {note.content}
                </Typography>
            </CardContent>


        </Card>
    );
}

export default Note;