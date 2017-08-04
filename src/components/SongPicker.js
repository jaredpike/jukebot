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
                            <Result title="Krewella - Alive"
                                    channel="KrewellaVEVO"
                                    length="4:05"
                                    songId="76jARSWqcdM"
                                    addToPlaylist={this.props.addToPlaylist}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongPicker;
