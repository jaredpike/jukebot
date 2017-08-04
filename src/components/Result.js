import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
    render() {
        return (
            <li className="result">
                <button className="result__link" onClick={() => this.props.addToPlaylist()}>
                    <div className="result__image"
                         style={{
                             backgroundImage: "url('http://img.youtube.com/vi/" + this.props.songId + "/mqdefault.jpg')"
                         }}>
                    </div>
                    <div className="result__contents">
                        <h2 className="result__title">{this.props.title}</h2>
                        <p className="result__channel">{this.props.channel}</p>
                    </div>
                    <div className="result__length">{this.props.length}</div>
                </button>
            </li>
        );
    }
}

export default Result;
