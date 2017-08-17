import React, { Component } from 'react';
import XIcon from './vectors/XIcon';

class PlaylistItem extends Component {
    render() {
        const { details, index } = this.props;
        const count = parseInt(index, 10) + 1;
        return (
            <li className="playlist__item">
                <div className="playlist__order">{count}</div>
                <h3 className="playlist__title">{details.title}</h3>
                <button className="playlist__close" onClick={() => this.props.removeFromPlaylist(index)}>
                    <XIcon />
                </button>
            </li>
        );
    }
}

export default PlaylistItem;
