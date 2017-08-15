import React, { Component } from 'react';
import './Controls.scss';
import LoopIcon from './vectors/LoopIcon';
import PauseIcon from './vectors/PauseIcon';
import NextIcon from './vectors/NextIcon';
import PrevIcon from './vectors/PrevIcon';
import PlayIcon from './vectors/PlayIcon';
import ShuffleIcon from './vectors/ShuffleIcon';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="controls__inner">
                    <button className="controls__button" disabled>
                        <ShuffleIcon />
                    </button>
                    <button className="controls__button" disabled>
                        <PrevIcon />
                    </button>
                    <button onClick={this.props.togglePlayPause} className="controls__button">
                        {this.props.isPlaying ? (
                            <PauseIcon />
                        ) : (
                            <PlayIcon />
                        )}
                    </button>
                    <button onClick={this.props.playNextSong} className="controls__button" disabled={this.props.playlist ? false : true}>
                        <NextIcon />
                    </button>
                    <button className="controls__button" disabled>
                        <LoopIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default Controls;