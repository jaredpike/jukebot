import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { details, index } = this.props;
        this.props.addToPlaylist(details);
        this.props.removeFromResults(index);
    }
    render() {
        const { details } = this.props;
        return (
            <li className="result">
                <button className="result__link" onClick={this.handleClick}>
                    <div className="result__image"
                         style={{
                             backgroundImage: "url('https://img.youtube.com/vi/" + details.id + "/mqdefault.jpg')"
                         }}>
                    </div>
                    <div className="result__contents">
                        <h2 className="result__title">{details.title}</h2>
                        <p className="result__channel">{details.channelTitle}</p>
                    </div>
                </button>
            </li>
        );
    }
}

export default Result;
