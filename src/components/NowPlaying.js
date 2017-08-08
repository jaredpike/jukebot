import React, { Component } from 'react';
import './NowPlaying.scss';
import Player from './Player';

class NowPlaying extends Component {
    render() {
        return (
            <div className="now-playing">
                <Player />
                <div className="now-playing__inner">
                    <h1 className="now-playing__heading">
                        <span>Now Playing</span>
                        <span>Krewella - Team</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default NowPlaying;