import React, { Component } from 'react';
import Player from '../components/Player';

class PlaylistDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { playlist } = this.props;
        return (
            <div class='playlist-details'>
                <div><Player /></div>
            </div>
        )
    }
}