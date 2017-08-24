import React, { Component } from 'react';
import './NowPlaying.scss';
import ReactPlayer from 'react-player';
import { youTubeUrl } from '../helpers.js';

class NowPlaying extends Component {
    render() {
        return (
            <div className={"now-playing " + (this.props.isPlaying ? 'playing' : 'paused')}>
                <ReactPlayer
                    url={youTubeUrl(this.props.currentSong.id)}
                    playing={this.props.isPlaying}
                    onEnded={this.props.onEnd}
                    onError={this.props.playNextSong}
                    onProgress={this.props.onProgress}
                    volume={this.props.volume}
                    ref={this.props.player}
                    progressFrequency={100}
                />
                <div className="now-playing__inner">
                    <a className="now-playing__heading" href={youTubeUrl(this.props.currentSong.id)} target="_blank">
                        <span>{(this.props.isPlaying) ? 'Now Playing' : 'Paused'} </span>
                        <span>{ this.props.currentSong.title }</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default NowPlaying;