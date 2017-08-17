import React, { Component } from 'react';
import './NowPlaying.scss';
import ReactPlayer from 'react-player';

class NowPlaying extends Component {
    render() {
        return (
            <div className={"now-playing " + (this.props.isPlaying ? 'playing' : 'paused')}>
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=' + this.props.currentSong.id}
                    playing={this.props.isPlaying}
                    onEnded={this.props.playNextSong}
                    onError={this.props.playNextSong}
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