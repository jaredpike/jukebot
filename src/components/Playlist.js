import React, { Component } from 'react';
import './Playlist.scss';
import PlaylistItem from './PlaylistItem';

class Playlist extends Component {
    render() {
        return (
            <div className="playlist">
                <div className="playlist__inner">
                    <span className="playlist__up-next">Up Next</span>
                    <ul className="playlist__list">
                        {
                        Object
                        .keys(this.props.playlist)
                        .map(key => <PlaylistItem key={key} index={key} details={this.props.playlist[key]} removeFromPlaylist={this.props.removeFromPlaylist} />)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Playlist;