import React, {
    // useEffect
} from "react";
import { 
    useDispatch, 
    useSelector 
} from "react-redux";
import { 
    // loadNotes, 
    makeNote, 
    deleteNote 
} from "../redux/slices/PlaylistNotesSlice";
import CreateNote from './CreateNote';
import Note from "./Note";

function CurrentNotes(props) {
    const dispatch = useDispatch();
    const playlistId = props.currentPlaylist;
    // useEffect(()=> {
    //     currentNotes = dispatch(loadNotes(playlistId))
    //     console.log("Current Notes from store:", currentNotes)
    // })
    const currentNotes = useSelector(state => state.currentNotesSliceReducer.notes);
    // useDispatch(loadNotes(playlistId));

    const onMakeNoteHandler = (note) => {
        dispatch(makeNote(note));
    };

    return (
        <div className={`playlist-${playlistId}-notes`}>
            <h3>Notes:</h3>
            {currentNotes?.length && currentNotes.map(note => <Note key={note.id} note={note} onDeleteNote={() => dispatch(deleteNote(note.id))} />)}
            <CreateNote onMakeNoteHandler={onMakeNoteHandler}/>
        </div>
    );
}
export default CurrentNotes;