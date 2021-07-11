const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback";
const clientId = "SPOTIFY_APP_CLIENT_ID_KEY";

const scopes = [  
    "playlist-read-collaborative",
    "playlist-read-private",
    "playlist-read-public",
    "streaming",
    "user-library-read",
    "user-read-private",
    "user-top-read"
];