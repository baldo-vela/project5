import { useState, useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
//See: https://www.npmjs.com/package/react-spotify-web-playback for further references

export default function Player({ authToken, playlistUri, }) {
    const [play, setPlay] = useState(false);
    useEffect(() => setPlay(true), [playlistUri]);
    //URI prop requires an array!
    //Leave Autoplay off by default
    if (!authToken) return null;
    return <SpotifyPlayer
        autoPlay={false}
        play={play}
        token={authToken}
        uris={playlistUri ? [playlistUri] : []}
    />;
}