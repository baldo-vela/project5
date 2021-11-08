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

import { notesAPI } from "../../globals";

//TODO: Replace this with import from global
const noteUrl = notesAPI;

export const loadNotes = createAsyncThunk(
    "currentNotes/fetchByIdStatus",
    async (playlistId, thunkAPI) => {
        console.log('Fetching Notes for: ', playlistId);
        const data = await fetch(noteUrl,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: {
                    'playlistId': playlistId,
                }
            }
        );
        const json = await data.json();
        return json;
    }
)


/*--------API Actions--------*/
//Make a New Note
export const makeNote = createAsyncThunk(
    "currentNotes/postStatus",
    async (newNote, thunkAPI) => {
        console.log('Posting to back end, Note:', newNote);
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
    "currentNotes/deleteStatus",
    async (newNote, thunkAPI) => {
        console.log('Posting to back end, Note:', newNote);
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
// //Edit an Existing Note
// export const editNote = createAsyncThunk(
//     "currentNotes/editStatus",
//     async (noteToEdit, thunkAPI) => {
//         console.trace('Posting to back end, Note:', noteToEdit);
//         const resp = await fetch(noteUrl, {
//             body: JSON.stringify(noteToEdit),
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             method: "PATCH",
//         });
//         const json = await resp.json();
//         console.log('Server Responds to Patch request with: ', resp);
//         return json;
//     }
// )

const sliceOptions = {
    name: "currentNotes",
    initialState: {
        notes: [],
        isLoading: false,
        hasError: false,
        error: null,
        // postNote: {
        //     newNote: '',
        //     isLoading: false,
        //     hasError: false,
        //     error: null,
        // },
        // deleteNote: {
        //     trashnote: '',
        //     isLoading: false,
        //     hasError: false,
        //     error: null,
        // },
    },
    reducers: {
        makeNote: (state, action) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.notes.filter((note) => note.id !== action.payload.id);
        },
        // editNote: (state, action) => {
        //     state.notes.map(note => (note.id ===action.payload.id ? { ...note, actio}))
        // },
    },
    extraReducers: {
        [loadNotes.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadNotes.fulfilled]: (state, action) => {
            state.notes = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadNotes.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [makeNote.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [makeNote.fulfilled]: (state, action) => {
            state.notes = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [makeNote.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
}

export const currentNotesSlice = createSlice(sliceOptions);
export default currentNotesSlice.reducer;