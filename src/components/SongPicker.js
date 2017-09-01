import React, { Component } from 'react';
import Result from './Result';
import Search from './Search';

class SongPicker extends Component {
    render() {
        return (
            <div className="section--left">
                <div className="section__inner">
                    <Search search={this.props.search}/>

                    <div className="results" id="results">
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
