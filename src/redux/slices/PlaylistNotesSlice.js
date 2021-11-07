/*
Note has
userId
content
date

Four Actions from event handlers:
`getNotes` a list of all the notes for a playlist, requires a Get request to Rails API
`makeNote` takes a given note object and creates it on the Rails API
`deleteNote` deletes a note given it's Note ID
`editNote` pushes a patch request for the given note data to update the Rails API
*/
//RTK
import { createAsyncThunk, createSelector, createSlice, } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";

//TODO: Replace this with import from global
const noteUrl = ""

// export const loadNotes = createAsyncThunk(
//     "notes/fetchByIdStatus",
//     async (playlistId, thunkAPI) => {
//         console.trace('Fetching Notes for: ', playlistId);
//         const data = await fetch(noteUrl,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//                 body: {
//                     JSON.stringify({playlistId: 
//                 }
//             } )
//     }
// )


/*--------API Actions--------*/
//Make a New Note
export const makeNote = createAsyncThunk(
    "notes/postStatus",
    async (newNote, thunkAPI) => {
        console.trace('Posting to back end, Note:', newNote);
        const resp = await fetch(noteUrl, {
            body: JSON.stringify(newNote),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
        });
        const json = await resp.json();
        console.log('Server Responds to Post request with: ', resp);
        return json;
    }
)
//Delete a Note
export const deleteNote = createAsyncThunk(
    "notes/deleteStatus",
    async (newNote, thunkAPI) => {
        console.trace('Posting to back end, Note:', newNote);
        const resp = await fetch(noteUrl, {
            body: JSON.stringify(newNote),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "DELETE",
        });
        const json = await resp.json();
        console.log('Server Responds to Post request with: ', resp);
        return json;
    }
)
//Edit and Existing Note
export const editNote = createAsyncThunk(
    "notes/editStatus",
    async (noteToEdit, thunkAPI) => {
        console.trace('Posting to back end, Note:', noteToEdit);
        const resp = await fetch(noteUrl, {
            body: JSON.stringify(noteToEdit),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PATCH",
        });
        const json = await resp.json();
        console.log('Server Responds to Patch request with: ', resp);
        return json;
    }
)

const sliceOptions = {
    name: "notes",
    initialState: {
        notes: [],
        isLoading: false,
        hasError: false,
        error: null,
    },
    reducers: {
        getNotes: (state) => {
            
        },
        makeNote: (state, action) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state)

    }
}