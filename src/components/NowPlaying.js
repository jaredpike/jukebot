import React, { Component } from 'react';
import './NowPlaying.scss';
import Player from './Player';

class NowPlaying extends Component {
    render() {
        return (
            <div className={"now-playing " + (this.props.isPlaying ? 'playing' : 'paused')}>
                <Player playNextSong={this.props.playNextSong}
                        playlist={this.props.playlist}
                        currentSong={this.props.currentSong}
                        isPlaying={this.props.isPlaying}
                />
                <div className="now-playing__inner">
                    <h1 className="now-playing__heading">
                        <span>{(this.props.isPlaying) ? 'Now Playing' : 'Paused'} </span>
                        <span>{ this.props.currentSong.title }</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default NowPlaying;