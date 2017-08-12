import React, { Component } from 'react';
import NowPlaying from './NowPlaying';
import Controls from './Controls';
import Playlist from './Playlist';

class Inventory extends Component {
    render() {
        return (
            <div className="section--right">
                <div className="section__inner">
                    <NowPlaying
                        playNextSong={this.props.playNextSong}
                        playlist={this.props.playlist}
                        currentSong={this.props.currentSong}
                    />
                    <Controls />
                    <Playlist results={this.props.results} playlist={this.props.playlist}/>
                </div>
            </div>
        );
    }
}

export default Inventory;
