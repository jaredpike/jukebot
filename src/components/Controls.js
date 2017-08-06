import React, { Component } from 'react';
import './Controls.scss';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="controls__inner">
                    <button className="controls__button">
                        Shuffle
                    </button>
                    <button className="controls__button">
                        Prev
                    </button>
                    <button className="controls__button">
                        Play/Pause
                    </button>
                    <button className="controls__button">
                        Next
                    </button>
                    <button className="controls__button">
                        Loop
                    </button>
                </div>
            </div>
        )
    }
}

export default Controls;