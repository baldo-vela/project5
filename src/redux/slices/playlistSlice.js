import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/* 
    // Pure Javascript
    fetchPlaylists = (shouldRetry=true) => {
        console.log('fetching playlists')
        return fetch(playlistAPI, {
        headers: {

        'Authorization': 'Bearer ' + this.state.users[1].access_token
        }
    })
    .then(res => res.json())
    .then(data => {
      console.log('playlists data', data)
      if (data.error && shouldRetry) {
        this.refreshToken()
      } else {
        console.log('setting playlists state')
        this.setState({playlists: data})
      }
    })
    .then(data => this.createPlaylist())
  }

  // Async Redux Thunk
    async fucntion fetchPlaylists() {
        console.log("fetching playlists");
        const response = await fetch(playlistAPI, {

    }
*/