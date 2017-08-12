import React, { Component } from 'react';
import './Controls.scss';
import LoopIcon from './vectors/LoopIcon';
// import PauseIcon from './vectors/PauseIcon';
import NextIcon from './vectors/NextIcon';
import PrevIcon from './vectors/PrevIcon';
import PlayIcon from './vectors/PlayIcon';
import ShuffleIcon from './vectors/ShuffleIcon';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="controls__inner">
                    <button className="controls__button">
                        <ShuffleIcon />
                    </button>
                    <button className="controls__button">
                        <PrevIcon />
                    </button>
                    <button className="controls__button">
                        <PlayIcon />
                    </button>
                    <button className="controls__button">
                        <NextIcon />
                    </button>
                    <button className="controls__button">
                        <LoopIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default Controls;