import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';
import Inventory from './Inventory';
import youtube from 'youtube-search';

class App extends Component {
    constructor() {
        super();

        this.addToPlaylist = this.addToPlaylist.bind(this);
        this.search = this.search.bind(this);

        // set initial state
        this.state = {
            results: [],
            playlist: []
        };
    }

    addToPlaylist(song) {
        // copy existing playlist
        const playlist = [...this.state.playlist];

        // push song into playlist array
        playlist.push(song);

        // update playlist state
        this.setState({playlist});
    }

    search(query) {
        // search options: https://developers.google.com/youtube/v3/docs/search/list
        const opts = {
            maxResults: 10,
            key: 'AIzaSyDRJpXF7CJ1uqGYgwRlqXQfmXFFHCYoXxY',
            type: 'video',
            videoEmbeddable: true
        };

        youtube(query, opts, (err, results) => {
            if (err) return console.log(err);

            this.setState({results: results});
        });
    }

    render() {
        return (
            <div className="fill-height">
                <Header name="Playlist"/>
                <div className="main">
                    <SongPicker results={this.state.results} addToPlaylist={this.addToPlaylist} search={this.search}/>
                    <Inventory results={this.state.results} playlist={this.state.playlist}/>
                </div>
            </div>
        );
    }
}

export default App;
