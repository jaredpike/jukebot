import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
    render() {
        const { details, index } = this.props;
        return (
            <li className="result">
                <button className="result__link" onClick={() => this.props.addToPlaylist(index)}>
                    <div className="result__image"
                         style={{
                             backgroundImage: "url('http://img.youtube.com/vi/" + details.id + "/mqdefault.jpg')"
                         }}>
                    </div>
                    <div className="result__contents">
                        <h2 className="result__title">{details.title}</h2>
                        <p className="result__channel">{details.channel}</p>
                    </div>
                    <div className="result__length">{details.length}</div>
                </button>
            </li>
        );
    }
}

export default Result;
