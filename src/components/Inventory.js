import React, { Component } from 'react';
import NowPlaying from './NowPlaying';

class Inventory extends Component {
    render() {
        return (
            <div className="section--right">
                <div className="section__inner">
                    <NowPlaying />
                </div>
            </div>
        );
    }
}

export default Inventory;
