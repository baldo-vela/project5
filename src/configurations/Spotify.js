//where we need to authenticate using Spotify
const authEndpoint = "https://accounts.spotify.com/authorize";

//Where we told the Spotify API to redirect us back to
const redirectUri = "https://localhost:3001/";


//The final Auth URL
export const usersAPI = `http://localhost:3000/api/v1/users`;