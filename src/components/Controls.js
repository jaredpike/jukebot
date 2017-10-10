import React, { Component } from 'react';
import './Controls.scss';
import LoopIcon from './vectors/LoopIcon';
import PauseIcon from './vectors/PauseIcon';
import NextIcon from './vectors/NextIcon';
import PrevIcon from './vectors/PrevIcon';
import PlayIcon from './vectors/PlayIcon';
import ShuffleIcon from './vectors/ShuffleIcon';

class Controls extends Component {
    constructor() {
        super();

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleLoop = this.handleLoop.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
    }

    handlePlayPause() {
        this.props.togglePlayPause();
        this.playButton.blur();
    }

    handleLoop() {
        this.props.toggleLoop();
        this.loopButton.blur();
    }

    handlePrev() {
        this.props.resetProgress();
        this.prevButton.blur();
    }

    handleNext() {
        this.props.playNextSong();
        this.nextButton.blur();
    }

    handleShuffle() {
        this.props.toggleShuffle();
        this.shuffleButton.blur();
    }

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
                        id="controls-seeker"
                    />

                    <progress className="controls__progress"
                              max={1}
                              value={this.props.played} />

                    <button
                        className={"controls__button " + (this.props.shuffle ? 'is-active' : '')}
                        onClick={this.handleShuffle}
                        ref={(shuffleButton) => { this.shuffleButton = shuffleButton }}
                    >
                        <ShuffleIcon />
                    </button>

                    <button
                        className="controls__button"
                        onClick={this.handlePrev}
                        ref={(prevButton) => { this.prevButton = prevButton }}>
                        <PrevIcon />
                    </button>

                    <button
                        onClick={this.handlePlayPause}
                        className="controls__button"
                        ref={(playButton) => { this.playButton = playButton }}>
                        {this.props.isPlaying ? (
                            <PauseIcon />
                        ) : (
                            <PlayIcon />
                        )}
                    </button>

                    <button
                        onClick={this.handleNext}
                        className="controls__button"
                        disabled={this.props.playlist ? false : true}
                        ref={(nextButton) => { this.nextButton = nextButton }}
                    >
                        <NextIcon />
                    </button>

                    <button
                        className={"controls__button " + (this.props.loop ? 'is-active' : '')}
                        onClick={this.handleLoop}
                        ref={(loopButton) => { this.loopButton = loopButton }}
                    >
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