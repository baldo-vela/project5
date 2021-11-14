import { useState, useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
//See: https://www.npmjs.com/package/react-spotify-web-playback for further references

export default function Player({ authToken, playlistUri, }) {
    const [play, setPlay] = useState(false);
    useEffect(() => setPlay(true), [playlistUri]);
    /* Player Style Options
        activeColor: string;
        altColor: string;
        bgColor: string;
        color: string;
        errorColor: string;
        height: number | string;
        loaderColor: string;
        loaderSize: number | string;
        sliderColor: string;
        sliderHandleBorderRadius: number | string;
        sliderHandleColor: string;
        sliderHeight: number;
        sliderTrackBorderRadius: number | string;
        sliderTrackColor: string;
        trackArtistColor: string;
        trackNameColor: string; */
    // const playerStyles = {
    //     //TODO: Re-enable after pallet redesign
    //     color: "#27163f",
    //     bgColor: "#595959",
    // };
    //URI prop requires an array!
    //Leave Autoplay off by default
    //We gonna dump in all the params as props, except callback for tweaking that A E S T H E T I C
    if (!authToken) return null;
    return <SpotifyPlayer
                autoPlay={false}
                magnifySliderOnHover={true}
                play={play}
                showSaveIcon={true}
                // styles={playerStyles}
                token={authToken}
                uris={playlistUri ? [playlistUri] : []}
    />;
}