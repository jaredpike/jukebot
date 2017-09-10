import React, { Component } from 'react';
import XIcon from './vectors/XIcon';

class PlaylistItem extends Component {
    render() {
        const { details, index } = this.props;
        return (
            <li className="playlist__item">
                <h3 className="playlist__title" onClick={() => this.props.playSong(details, index)}>{details.title}</h3>
                <button className="playlist__icon" onClick={() => this.props.removeFromPlaylist(index)}>
                    <XIcon />
                </button>
            </li>
        );
    }
}

export default PlaylistItem;
