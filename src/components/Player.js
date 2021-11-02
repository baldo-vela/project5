import React from "react";
import SpotifyPlayer from "react-spotify-player-web-playback";

export default function Player({authToken}) {
    //URI prop requires an array!
    //Leave Autoplay off by default
    if (!authToken) return null;
    return <SpotifyPlayer
        autoPlay={false}
        token={authToken}
        uris={trackUri ? [trackUri] : []}
    />;
}