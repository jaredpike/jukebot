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
                        volume={this.props.volume}
                    />
                    <Controls playNextSong={this.props.playNextSong}
                              togglePlayPause={this.props.togglePlayPause}
                              isPlaying={this.props.isPlaying}
                              playlist={this.props.playlist}
                              setVolume={this.props.setVolume}
                              volume={this.props.volume}
                    />
                    <Playlist results={this.props.results}
                              playlist={this.props.playlist}
                              removeFromPlaylist={this.props.removeFromPlaylist}
                              playSong={this.props.playSong}
                    />
                </div>
            </div>
        );
    }
}

export default Inventory;
