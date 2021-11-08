//This component contains the form and action handlers to create a new note
//React Imports
// import { createSelector } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeNote } from "../redux/slices/PlaylistNotesSlice";
//MUI
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
// import FormControl from '@mui/material/FormControl'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});


function CreateNote({onMakeNoteHandler}) {
    //Redux aliases
    const dispatch = useDispatch();
    
    //Pulls user's spotify name from store
    const userId = useSelector((state) =>state.userSliceReducer.user.id)
    
    //Form Submission state variables
    const [content, setContent] = useState('')
    const [contentError, setContentError] = useState(false)

    //MUI style
    const classes = useStyles()
    
    //TODO: Replace this test id
    const playlistId = '37i9dQZF1E8NXXPwwzgAyR';

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (content == '') {
            setContentError(true)
        }
        if(content){
            const newNote = {
                playlistId: playlistId,
                content: content,
                username: userId
            }
            dispatch(makeNote(newNote));
        }

    }

    return (
        <div className="notes-container">
            <Container size="md">
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    >
                        Create a New note
                    </Typography>

                    <form
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <TextField className={classes.field}
                            onChange={(e) => setContent(e.target.value)}
                            label="Content"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            errors={contentError}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            >
                                Submit
                        </Button>
                    </form>
            </Container>
        </div>
    )
}
export default CreateNote;