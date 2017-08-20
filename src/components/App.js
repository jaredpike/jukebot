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
        this.toggleShuffle = this.toggleShuffle.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.playSong = this.playSong.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.onUnload = this.onUnload.bind(this);

        // set initial state
        this.state = {
            results: [],
            playlist: [],
            playedSongs: [],
            currentSong: '',
            isPlaying: false,
            volume: 0.8,
            played: 0,
            shuffle: false
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
        let nextSongIndex = 0;

        // if shuffle, randomize selection
        if (this.state.shuffle) {
            nextSongIndex = Math.floor(Math.random()*this.state.playlist.length);
        }

        const nextSong = this.state.playlist[nextSongIndex];

        // if there's no next song, clear current song state
        if (!nextSong) {
            this.setState({
                currentSong: '',
                isPlaying: false
            });
            return;
        }

        // if the next song is the same as the current, reset to 0
        if (nextSong === this.state.currentSong) {
            this.resetProgress();
        }

        // play next song
        this.playSong(nextSong, 0);
    }

    playSong(song, key) {
        // set current song
        this.setState({
            currentSong: song,
            isPlaying: true,
            played: 0
        });

        // remove from playlist
        this.removeFromPlaylist(key);
    }

    togglePlayPause() {
        this.setState({isPlaying: !this.state.isPlaying});
    }

    toggleShuffle() {
        this.setState({shuffle: !this.state.shuffle});
    }

    search(query) {
        // search options: https://developers.google.com/youtube/v3/docs/search/list
        const opts = {
            maxResults: 12,
            key: 'AIzaSyDRJpXF7CJ1uqGYgwRlqXQfmXFFHCYoXxY',
            type: 'video',
            videoEmbeddable: true
        };

        youtube(query, opts, (err, results) => {
            if (err) return console.log(err);

            this.setState({results: results});
        });
    }

    resetProgress() {
        this.player.seekTo(0);
    }

    onSeekMouseDown = e => {
        this.setState({ seeking: true });
    }

    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) });
    }

    onSeekMouseUp = e => {
        this.setState({ seeking: false });
        this.player.seekTo(parseFloat(e.target.value));
    }

    onProgress = state => {
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    onUnload = e => {
        if (this.state.isPlaying === true && this.state.currentSong) {
            e.returnValue = 'Are you sure you want to leave this page?';
            return 'Are you sure you want to leave this page?';
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);
    }

    render() {
        return (
            <div className="fill-height">
                <Header name="Playlist"/>
                <div className={"main " + (this.state.currentSong || this.state.playlist.length ? 'has-songs' : '')}>
                    <SongPicker results={this.state.results}
                                addToPlaylist={this.addToPlaylist}
                                search={this.search}
                                playerRef={player => this.player = this}
                    />
                    <Inventory results={this.state.results}
                               playlist={this.state.playlist}
                               playNextSong={this.playNextSong}
                               currentSong={this.state.currentSong}
                               removeFromPlaylist={this.removeFromPlaylist}
                               isPlaying={this.state.isPlaying}
                               togglePlayPause={this.togglePlayPause}
                               playSong={this.playSong}
                               setVolume={this.setVolume}
                               volume={this.state.volume}
                               player={player => { this.player = player }}
                               onProgress={this.onProgress}
                               onSeekChange={this.onSeekChange}
                               onSeekMouseUp={this.onSeekMouseUp}
                               onSeekMouseDown={this.onSeekMouseDown}
                               played={this.state.played}
                               resetProgress={this.resetProgress}
                               shuffle={this.state.shuffle}
                               toggleShuffle={this.toggleShuffle}
                    />
                </div>
            </div>
        );
    }
}

export default App;
