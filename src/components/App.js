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
        this.playNextSong = this.playNextSong.bind(this);

        // set initial state
        this.state = {
            results: [],
            playlist: [],
            playedSongs: [],
            currentSong: ''
        };
    }

    addToPlaylist(song) {
        // copy existing playlist
        const playlist = [...this.state.playlist];

        // if playlist is empty and no songs are playing
        if (playlist.length === 0 && !this.state.currentSong) {
            this.setState({currentSong: song});
            return;
        }

        // push song into playlist array
        playlist.push(song);

        // update playlist state
        this.setState({playlist});
    }

    playNextSong() {
        const nextSong = this.state.playlist[0];

        // if there's no next song, clear current song state
        if (!nextSong) {
            console.log('no next song');
            this.setState({currentSong: ''})
            return;
        }

        // change to next song
        this.setState({currentSong: nextSong})

        // remove first item from playlist
        this.setState({playlist: this.state.playlist.filter((_, i) => i !== 0)});
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
                    <Inventory results={this.state.results} playlist={this.state.playlist} playNextSong={this.playNextSong} currentSong={this.state.currentSong}/>
                </div>
            </div>
        );
    }
}

export default App;
