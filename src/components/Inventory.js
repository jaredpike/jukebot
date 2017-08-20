import React, { Component } from 'react';
import NowPlaying from './NowPlaying';
import Controls from './Controls';
import Playlist from './Playlist';

class Inventory extends Component {
    render() {
        return (
            <div className="section--right">
                <div className="section__inner">
                    <div className="section--player">
                        <NowPlaying
                            playNextSong={this.props.playNextSong}
                            playlist={this.props.playlist}
                            currentSong={this.props.currentSong}
                            isPlaying={this.props.isPlaying}
                            volume={this.props.volume}
                            player={this.props.player}
                            onProgress={this.props.onProgress}
                        />
                        <Controls playNextSong={this.props.playNextSong}
                                  togglePlayPause={this.props.togglePlayPause}
                                  isPlaying={this.props.isPlaying}
                                  playlist={this.props.playlist}
                                  setVolume={this.props.setVolume}
                                  volume={this.props.volume}
                                  resetProgress={this.props.resetProgress}
                                  onSeekChange={this.props.onSeekChange}
                                  onSeekMouseUp={this.props.onSeekMouseUp}
                                  onSeekMouseDown={this.props.onSeekMouseDown}
                                  played={this.props.played}
                                  shuffle={this.props.shuffle}
                                  toggleShuffle={this.props.toggleShuffle}
                        />
                    </div>
                    <Playlist results={this.props.results}
                              playlist={this.props.playlist}
                              removeFromPlaylist={this.props.removeFromPlaylist}
                              playSong={this.props.playSong}
                              shuffle={this.props.shuffle}
                    />
                </div>
            </div>
        );
    }
}

export default Inventory;
