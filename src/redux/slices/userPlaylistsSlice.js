// RTK imports
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
// Configuration
import { spotifyUserURL } from "../../configurations/Spotify";

export const fetchPlaylists = createAsyncThunk(
  "userPlaylists/fetchStatus",
  async (authToken, thunkAPI) => {
    console.trace('Fetching Playlists for current User from Spotify: ',spotifyUserURL);
    const data = await fetch( spotifyUserURL + "/playlists",
      {
        body: null,
        headers: {
          'Authorization': "Bearer " + authToken,
          'Content-Type': 'application/json'
        }
      });
      const json = await data.json();
      console.log(json)
      return json;
  }
)
/* Sample of a Playlist Fetch
{href: 'https://api.spotify.com/v1/users/moleculetycoon/playlists?offset=0&limit=20', items: Array(20), limit: 20, next: 'https://api.spotify.com/v1/users/moleculetycoon/playlists?offset=20&limit=20', offset: 0, …}
href: "https://api.spotify.com/v1/users/moleculetycoon/playlists?offset=0&limit=20"
items: Array(20)
0: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/1qTjx7BcTaASGziQkRfrFl', id: '1qTjx7BcTaASGziQkRfrFl', …}
1: {collaborative: false, description: 'Soft jazz for all your activities.', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI', id: '37i9dQZF1DWV7EzJMK2FUI', …}
2: {collaborative: false, description: 'Calming Music to help against your anxiety, stressing or if you just wanna relax. Much love 😊💖', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/7LI3zw8HLkjKo5YpvA26KG', id: '7LI3zw8HLkjKo5YpvA26KG', …}
3: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/4XTobd5oov900xwBHjLwny', id: '4XTobd5oov900xwBHjLwny', …}
4: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/4b90wfoxyUJLHbtjQTF1lG', id: '4b90wfoxyUJLHbtjQTF1lG', …}
5: {collaborative: false, description: 'lofi hip hop music - beats to relax/study to | Chi…ebrate one of the greatest lofi label of all time', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/3vXUEGi4ip1EhI9OtdgdCy', id: '3vXUEGi4ip1EhI9OtdgdCy', …}
6: {collaborative: false, description: '<p>Enter another dimension of classical music with…i61tT0OnnK">Space-themed Classical Music</a>.</p>', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbIeCFU20wRm', id: '37i9dQZF1DXbIeCFU20wRm', …}
7: {collaborative: true, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/00Xwq26dSetipYffuUutFL', id: '00Xwq26dSetipYffuUutFL', …}
8: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/37i9dQZF1E8A1yzwiVJbCk', id: '37i9dQZF1E8A1yzwiVJbCk', …}
9: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/1fAyMF8A9yuQmSTX3YjVOK', id: '1fAyMF8A9yuQmSTX3YjVOK', …}
10: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/5dJrKyd9JEsnUj6Z4kFnG5', id: '5dJrKyd9JEsnUj6Z4kFnG5', …}
11: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/1TOsRDjP8QeBPMWc5FiIMu', id: '1TOsRDjP8QeBPMWc5FiIMu', …}
12: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/4QnoFdUJC1WJHniZweWKpg', id: '4QnoFdUJC1WJHniZweWKpg', …}
13: {collaborative: true, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/2MNfFQLQd4BJ3AfuzunKny', id: '2MNfFQLQd4BJ3AfuzunKny', …}
14: {collaborative: true, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/4OxLgQCiJzgAhpDsCRy65P', id: '4OxLgQCiJzgAhpDsCRy65P', …}
15: {collaborative: false, description: 'Sing along and enjoy the drive...', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWMOmoXKqHTD', id: '37i9dQZF1DWWMOmoXKqHTD', …}
16: {collaborative: false, description: '{ Bard Songs, Tavern Music, Dragon Age, Skyrim, The Witcher }', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/6L0JnTTHHQJfcqf8U8WqvQ', id: '6L0JnTTHHQJfcqf8U8WqvQ', …}
17: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/7eNflcLWNCHHEOhVLT12HY', id: '7eNflcLWNCHHEOhVLT12HY', …}
18: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/3PogMWoZoxTfn2aOD4VR4V', id: '3PogMWoZoxTfn2aOD4VR4V', …}
19: {collaborative: false, description: '', external_urls: {…}, href: 'https://api.spotify.com/v1/playlists/6vsrFiZDQ53BzGEOJYogZO', id: '6vsrFiZDQ53BzGEOJYogZO', …}
length: 20
[[Prototype]]: Array(0)
limit: 20
next: "https://api.spotify.com/v1/users/moleculetycoon/playlists?offset=20&limit=20"
offset: 0
previous: null
total: 62
[[Prototype]]: Object
*/

//Long format to list out all the slice options for this slice
const sliceOptions = {
  name: "userPlaylists",
  initialState: {
    playlists: [],
    isLoading: false,
    hasError: false,
    error: null,
  },
  reducers: {
  
  },
  extraReducers: {
    [fetchPlaylists.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPlaylists.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
  }
}
//TODO: Reformat the lifecycle states to NOT be booleans as per style guide https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns
};
//Creates the userPlaylists slice for currentUser from sliceOptions
export const userPlaylistsSlice = createSlice(sliceOptions);
export default userPlaylistsSlice.reducer;

//Provides the application with the current array of playlists for the current user
export const selectUserPlaylists = createSelector((state) => state.userPlaylistsReducer.playlists.items);
export const selectUserPlaylistsLoadingStatus = createSelector((state) => state.userPlaylistsReducer.isLoading);
export const selectUserPlaylistsErrorStatus = createSelector((state) => state.userPlaylistsReducer.hasError);
export const selectUserPlaylistsError = createSelector((state) => state.userPlaylistsReducer.error);
//For Querying the next page of playlists
export const selectNextPlaylistsPage = createSelector((state) => state.userPlaylistsReducer.playlists.next);
export const selectPreviousPlaylistsPage = createSelector((state) => state.userPlaylistsReducer.playlists.previous);
export const selectTotalPlaylists = createSelector((state) => state.userPlaylistsReducer.playlists.total);
export const selectLimitPlaylists = createSelector((state) => state.userPlaylistsReducer.playlists.limit);
export const selectOffsetPlaylists = createSelector((state) => state.userPlaylistsReducer.playlists.offset);

//Selecting Specific Playlists from the Store
export const selectPlaylistByID = createSelector((state, id) => state.userPlaylistsReducer.playlists.items.find((playlist) => playlist.id === id));
//const selectPlaylistByName = (state, name) => state.userPlaylistsReducer.playlists.items.find((playlist) => playlist.name === name);
