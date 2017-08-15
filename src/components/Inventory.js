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
                        isPlaying={this.props.isPlaying}
                    />
                    <Controls playNextSong={this.props.playNextSong}
                              togglePlayPause={this.props.togglePlayPause}
                              isPlaying={this.props.isPlaying}
                              playlist={this.props.playlist}
                    />
                    <Playlist results={this.props.results}
                              playlist={this.props.playlist}
                              removeFromPlaylist={this.props.removeFromPlaylist}
                    />
                </div>
            </div>
        );
    }
}

export default Inventory;
