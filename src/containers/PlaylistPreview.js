/*userPlaylistsReducer
    |
    |- playlists
    |   |- items: [
    |       | # (starts at 0, as per all JS arrays)
    |           | collaborative: 'false'
    |           | description: 'A playlist description'
    |           | external_urls: {
    |               spotify:"https://open.spotify.com/playlist/1qTjx7BcTaASGziQkRfrFl"
                |   }
                | href:"https://api.spotify.com/v1/playlists/1qTjx7BcTaASGziQkRfrFl"
                | id: "1qTjx7BcTaASGziQkRfrFl" (22? character string that provides a unique id, assume it's an uncapped length and limited by the variable size limit of the Spotify API and some basic 'uniqueness' logic)
                | images: [
                |   0: {
                |        height: 640
                |        url: "https://mosaic.scdn.co/640/ab67616d0000b273b33d46dfa2635a47eebf63b2ab67616d0000b273bc50c3b509f956b35d34ad11ab67616d0000b273db68acf785493ec262cf5171ab67616d0000b273ebf7a2e21683f63fc5a73952"
                |       width: 640
                |    }
                |    ...
                | ]
                | name: "string"
                | owner: {
                |    display_name(pin):"Layla Rose"
                |    href(pin):"https://api.spotify.com/v1/users/heivmwor7v34jbr2cy0gacx3c"
                |    id(pin):"heivmwor7v34jbr2cy0gacx3c"
                |    type(pin):"user"
                |    uri(pin):"spotify:user:heivmwor7v34jbr2cy0gacx3c"
                | }
                | 
            |
            |]
    |       |- next:
    |   |- limit: 20
    |   |- next: "https://api.spotify.com/v1/users/foo/playlists?offset=20&limit=20"
    |   |- offset: 0
    |   |- previous: null
    |   |- total: 100 

*/
import React, {Component} from 'react'

class PlaylistPreview extends Component {

    render() {
        // { spotifyID, name: "Starlight Brigade Vibes", description: "Does what it says on the tin", owner: spotify username }
        const { id, name, description, owner, spotifyLink } = this.props.playlist;
        return(
            <div id={`playlist-${id}`}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{spotifyLink}</p>
                <p>id: {id}</p>
                <p>Owner: {owner}</p>
            </div>
        )
    }
}

export default PlaylistPreview