import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';
import Inventory from './Inventory';
import youtube from 'youtube-search';
import update from 'immutability-helper';

class App extends Component {
    constructor() {
        super();

        this.addToPlaylist = this.addToPlaylist.bind(this);
        this.search = this.search.bind(this);
        this.playNextSong = this.playNextSong.bind(this);
        this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
        this.togglePlayPause = this.togglePlayPause.bind(this);

        // set initial state
        this.state = {
            results: [],
            playlist: [],
            playedSongs: [],
            currentSong: '',
            isPlaying: false
        };
    }

    addToPlaylist(song) {
        // copy existing playlist
        const playlist = [...this.state.playlist];

        // if playlist is empty and no songs are playing
        if (playlist.length === 0 && !this.state.currentSong) {
            this.setState({currentSong: song});
            this.togglePlayPause();
            return;
        }

        // push song into playlist array
        playlist.push(song);

        // update playlist state
        this.setState({playlist});
    }

    removeFromPlaylist(key) {
        this.setState({
            playlist: update(this.state.playlist, {$splice: [[key, 1]]})
        })
    }

    playNextSong() {
        const nextSong = this.state.playlist[0];

        // if there's no next song, clear current song state
        if (!nextSong) {
            console.log('no next song');
            this.setState({currentSong: ''});
            this.setState({isPlaying: false});
            return;
        }

        // make sure player is playing
        this.setState({isPlaying: true});

        // change to next song
        this.setState({currentSong: nextSong})

        // remove first item from playlist
        this.setState({playlist: this.state.playlist.filter((_, i) => i !== 0)});
    }

    togglePlayPause() {
        this.setState({isPlaying: !this.state.isPlaying});
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
                    <SongPicker results={this.state.results}
                                addToPlaylist={this.addToPlaylist}
                                search={this.search}
                    />
                    <Inventory results={this.state.results}
                               playlist={this.state.playlist}
                               playNextSong={this.playNextSong}
                               currentSong={this.state.currentSong}
                               removeFromPlaylist={this.removeFromPlaylist}
                               isPlaying={this.state.isPlaying}
                               togglePlayPause={this.togglePlayPause}
                    />
                </div>
            </div>
        );
    }
}

export default App;
