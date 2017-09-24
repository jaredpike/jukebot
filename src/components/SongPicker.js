import React, { Component } from 'react';
import Result from './Result';
import Search from './Search';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class SongPicker extends Component {
    render() {
        return (
            <div className="section--left">
                <div className="section__inner">
                    <Search search={this.props.search} isSearching={this.props.isSearching}/>

                    <div className="results" id="results">
                        <CSSTransitionGroup
                            className="results__list"
                            component="ul"
                            transitionName="result"
                            transitionEnterTimeout={0}
                            transitionLeaveTimeout={150}
                        >
                            {
                                Object
                                    .keys(this.props.results)
                                    .map(key => <Result key={this.props.results[key].id.toString()} index={key} details={this.props.results[key]} addToPlaylist={this.props.addToPlaylist} removeFromResults={this.props.removeFromResults} />)
                            }
                        </CSSTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongPicker;
