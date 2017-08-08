import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';
import Inventory from './Inventory';
import sampleResults from '../sample-results';
import samplePlaylist from '../sample-playlist';

class App extends Component {
    constructor() {
        super();

        this.addToPlaylist = this.addToPlaylist.bind(this);

        // set initial state
        this.state = {
            results: sampleResults,
            playlist: samplePlaylist
        };
    }

    addToPlaylist(song) {
        console.dir(song);

        // copy existing playlist object
        const playlist = [...this.state.playlist];

        // push song into array
        playlist.push(song);

        // update playlist state
        this.setState({playlist});
    }

    render() {
        return (
            <div className="fill-height">
                <Header name="Playlist"/>
                <div className="main">
                    <SongPicker results={this.state.results} addToPlaylist={this.addToPlaylist} />
                    <Inventory results={this.state.results} playlist={this.state.playlist}/>
                </div>
            </div>
        );
    }
}

export default App;
