import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
    render() {
        return (
            <ReactPlayer
                url={'https://www.youtube.com/watch?v=' + this.props.currentSong.id}
                playing={this.props.isPlaying}
            />
        );
    }
}

export default Player;