//where we need to authenticate using Spotify
const authEndpoint = "https://accounts.spotify.com/authorize";

//Where we told the Spotify API to redirect us back to
const redirectUri = "https://localhost:3000/";

//Spotify's client ID, shimmed from .env
const clientId = process.env.REACT_APP_SPOTIFY_APP_CLIENT_ID_KEY;
console.log('Client Id:', clientId);
//Requested Permissions from Spotify
const scopes = [  
  "streaming",
  "user-read-email",
  "user-read-private",
];

//The final Auth URL
export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;