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
                    <input
                        type='range' min={0} max={1} step='any'
                        value={this.props.played}
                        onMouseDown={this.props.onSeekMouseDown}
                        onChange={this.props.onSeekChange}
                        onMouseUp={this.props.onSeekMouseUp}
                        className="controls__seek"
                    />
                    <progress className="controls__progress" max={1} value={this.props.played} />

                    <button className={"controls__button " + (this.props.shuffle ? 'is-active' : '')} onClick={this.props.toggleShuffle}>
                        <ShuffleIcon />
                    </button>

                    <button className="controls__button" onClick={this.props.resetProgress}>
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

                    <div className="volume">
                        <div className="volume__icon">
                            Volume
                        </div>
                        <input className="volume__slider" type='range' min={0} max={1} step='any' value={this.props.volume} onChange={this.props.setVolume} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Controls;