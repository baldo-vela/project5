//Backend Urls
const rootEndPointUrl = 'http://localhost:8000/api/v1';
const usersApi = `${rootEndPointUrl}/users`;
const playlistsApi = `${rootEndPointUrl}/playlists`;
const tracksApi = `${rootEndPointUrl}/tracks`;

//Spotify Urls
const spotifySearchApi = 'https://api.spotify.com/v1/search?q=';
const spotifyPlaylistsApi = 'https://api.spotify.com/v1/me/playlists';

//Makes global variables available to all modules
export default { rootEndPointUrl, usersApi, playlistsApi, tracksApi, spotifySearchApi, spotifyPlaylistsApi };