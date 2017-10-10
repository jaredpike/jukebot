import React, { Component } from 'react';
import './Playlist.scss';
import PlaylistItem from './PlaylistItem';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Playlist extends Component {
    render() {
        return (
            <div className="playlist">
                <div className="playlist__inner">
                    {this.props.playlist.length > 0 &&
                        <div className="playlist__header">
                            <span className="playlist__up-next">Up Next ({this.props.playlist.length})</span>
                            <button className="playlist__clear" onClick={() => this.props.clearPlaylist()}>Clear Playlist</button>
                        </div>
                    }
                    <CSSTransitionGroup
                        className="playlist__list"
                        component="ul"
                        transitionName="playlist"
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={300}
                    >
                        {
                        Object
                        .keys(this.props.playlist)
                        .map(key =>
                            <PlaylistItem
                                key={this.props.playlist[key].id.toString()}
                                index={key}
                                details={this.props.playlist[key]}
                                removeFromPlaylist={this.props.removeFromPlaylist}
                                playSong={this.props.playSong}
                                moveItem={this.props.moveItem}
                            />)
                        }

                    </CSSTransitionGroup>
                    {this.props.playlist.length < 1 &&
                    <div className="playlist__empty">
                        <p className="playlist__empty-message">Select more songs to start a playlist.</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Playlist;