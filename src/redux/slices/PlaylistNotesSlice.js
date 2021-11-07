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

