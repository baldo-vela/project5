import React, {
    // useEffect
} from "react";
import { 
    useDispatch, 
    // useSelector 
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
    const currentNotes = [{ 
        username: 'moleculetycoon', 
        content: "Testing1", 
        playlistId: playlistId,
        date: null,
    },]
    // useDispatch(loadNotes(playlistId));

    const onMakeNoteHandler = (note) => {
        dispatch(makeNote(note));
    };
    

    return currentNotes.map((note) => (
        <div className={`playlist-${playlistId}-notes`}>
            <h1> A series of notes goes here.</h1>
            <Note note={note} handleDelete={()=> dispatch(deleteNote(note))}/>
            <CreateNote onMakeNoteHandler={onMakeNoteHandler}/>
        </div>
    ));
}
export default CurrentNotes;