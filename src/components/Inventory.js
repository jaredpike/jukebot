import React, { Component } from 'react';
import NowPlaying from './NowPlaying';
import Controls from './Controls';

class Inventory extends Component {
    render() {
        return (
            <div className="section--right">
                <div className="section__inner">
                    <NowPlaying />
                    <Controls />
                </div>
            </div>
        );
    }
}

export default Inventory;
