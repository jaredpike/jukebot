import YouTube from 'react-youtube';
import React, { Component } from 'react';

class Player extends Component {
    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1
            }
        };

        return (
            <YouTube
                videoId="76jARSWqcdM"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Player;