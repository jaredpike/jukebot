import React, { Component } from 'react';
import NowPlaying from './NowPlaying';
import Controls from './Controls';
import Playlist from './Playlist';

class Inventory extends Component {
    render() {
        return (
            <div className="section--right">
                <div className="section__inner">
                    <NowPlaying />
                    <Controls />
                    <Playlist />
                </div>
            </div>
        );
    }
}

export default Inventory;
