import React, { Component } from 'react';
import './SongPicker.scss';
import Result from './Result';

class SongPicker extends Component {
    render() {
        return (
            <div className="section--left">
                <div className="section__inner">
                    <form className="search">
                        <div className="search__input">
                            <input type="text" placeholder="Search YouTube" />
                        </div>
                    </form>

                    <div className="results">
                        <ul className="results__list">
                            {
                                Object
                                    .keys(this.props.results)
                                    .map(key => <Result key={key} index={key} details={this.props.results[key]} addToPlaylist={this.props.addToPlaylist}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongPicker;
