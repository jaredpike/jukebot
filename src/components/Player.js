import YouTube from 'react-youtube';
import React, { Component } from 'react';

class Player extends Component {

    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                iv_load_policy: 3
            }
        };

        return (
            <YouTube
                videoId={this.props.currentSong.id}
                opts={opts}
                onReady={this.onReady}
                onEnd={this.props.playNextSong}
                onStateChange={this.onStateChange}
            />
        );
    }

    onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
    }

    onStateChange(event) {
        console.log(event);
    }
}

export default Player;