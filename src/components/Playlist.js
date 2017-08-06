import React, { Component } from 'react';
import './Playlist.scss';

class Playlist extends Component {
    render() {
        return (
            <div className="playlist">
                <div className="playlist__inner">
                    <span className="playlist__up-next">Up Next</span>
                    <ul className="playlist__list">
                        <li className="playlist__item">
                            <div className="playlist__order">1</div>
                            <h3 className="playlist__title">Artist - Title</h3>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Playlist;