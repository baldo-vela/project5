//where we need to authenticate using Spotify
const authEndpoint = "https://accounts.spotify.com/authorize";

//Where we told the Spotify API to redirect us back to
export const redirectUri = "https://localhost:3001/";
//Our Client URL
export const clientURL = "https://localhost:3000/";
//Our backend API server location
export const apiURL = 'http://localhost:3001/api/v1/login';
//Spotify API scopes
export const scopes = [
    'user-library-read',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'user-modify-playback-state',
    'user-read-private',
    'user-top-read',
    'playlist-modify-public',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-read-currently-playing'
    ];
//Public Spotify Client ID
export const clientID = "6ed60468af744e8699f512dc88fcd567";
//The final Auth URL
export const usersAPI = `http://localhost:3000/api/v1/users`;