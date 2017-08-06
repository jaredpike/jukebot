import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';
import Inventory from './Inventory';
import sampleResults from '../sample-results';

class App extends Component {
    constructor() {
        super();

        this.addToPlaylist = this.addToPlaylist.bind(this);

        // set initial state
        this.state = {
            results: sampleResults,
            playlist: {},
            currentSong: {}
        };
    }

    addToPlaylist(song) {
        console.log(`adding ${song} to playlist`);

        // get song object
    }

    render() {
        return (
            <div className="fill-height">
                <Header name="Playlist"/>
                <div className="main">
                    <SongPicker results={this.state.results} addToPlaylist={this.addToPlaylist} />
                    <Inventory />
                </div>
            </div>
        );
    }
}

export default App;
