import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes, makeNote } from "../redux/slices/PlaylistNotesSlice"

const CurrentNotes = () => {
    const dispatch = useDispatch();
    const currentNotes = useSelector(loadNotes);

    const onMakeNoteHandler = (note) => {
        dispatch(makeNote(note));
    };

    return currentNotes.map((note) => (
        <div>
            <h1> A series of notes goes here.</h1>
        </div>
    ));
};