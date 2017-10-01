import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';
import Inventory from './Inventory';
import youtube from 'youtube-search';
import update from 'immutability-helper';
import Mousetrap from 'mousetrap';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {
    constructor() {
        super();

        this.addToPlaylist = this.addToPlaylist.bind(this);
        this.search = this.search.bind(this);
        this.playNextSong = this.playNextSong.bind(this);
        this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
        this.removeFromResults = this.removeFromResults.bind(this);
        this.togglePlayPause = this.togglePlayPause.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
        this.toggleLoop = this.toggleLoop.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.playSong = this.playSong.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.clearPlaylist = this.clearPlaylist.bind(this);
        this.archiveSong = this.archiveSong.bind(this);
        this.moveItem = this.moveItem.bind(this);
        this.onUnload = this.onUnload.bind(this);

        // set initial state
        this.state = {
            results: [],
            playlist: [],
            playedSongs: [],
            currentSong: '',
            isPlaying: false,
            isSearching: false,
            volume: 0.8,
            played: 0,
            shuffle: false,
            loop: false
        };
    }

    addToPlaylist(song) {
        // copy existing playlist
        const playlist = [...this.state.playlist];

        // if playlist is empty and no songs are playing
        if (playlist.length === 0 && !this.state.currentSong) {
            this.setState({currentSong: song});
            this.archiveSong(song);
            this.togglePlayPause();
            return;
        }

        // push song into playlist array
        playlist.push(song);

        // update playlist state
        this.setState({playlist});
    }

    removeFromPlaylist(key) {
        this.setState((prevState) => ({
            playlist: update(prevState.playlist, {$splice: [[key, 1]]})
        }));
    }

    removeFromResults(key) {
        this.setState((prevState) => ({
            results: update(prevState.results, {$splice: [[key, 1]]})
        }))
    }

    clearPlaylist() {
        this.setState({playlist: []});
    }

    onEnd() {
        if (this.state.loop) {
            this.player.seekTo(0);
            return;
        }

        this.playNextSong();
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
        this.playSong(nextSong, nextSongIndex);
    }

    playSong(song, key) {
        // set current song
        this.setState({
            currentSong: song,
            isPlaying: true,
            played: 0
        });

        this.archiveSong(song);

        // remove from playlist
        this.removeFromPlaylist(key);
    }

    moveItem(dragIndex, hoverIndex) {
        const { playlist } = this.state;
        const dragItem = playlist[dragIndex];

        this.setState(update(this.state, {
            playlist: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragItem],
                ],
            },
        }));
    }

    archiveSong(song) {
        // push into played songs array
        const playedSongs = [...this.state.playedSongs];
        playedSongs.push(song);
        this.setState({playedSongs});
    }

    togglePlayPause() {
        this.setState({isPlaying: !this.state.isPlaying});
    }

    toggleShuffle() {
        this.setState({shuffle: !this.state.shuffle});
    }

    toggleLoop() {
        this.setState({loop: !this.state.loop});
    }

    search(query) {
        // search options: https://developers.google.com/youtube/v3/docs/search/list
        const opts = {
            maxResults: 5,
            key: 'AIzaSyDRJpXF7CJ1uqGYgwRlqXQfmXFFHCYoXxY',
            type: 'video',
            videoEmbeddable: true
        };

        this.setState({results: []});
        this.setState({isSearching: true})

        youtube(query, opts, (err, results) => {
            if (err) return console.log(err);

            this.setState({results: results});
            this.setState({isSearching: false});
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

        Mousetrap.bind('p', this.togglePlayPause);
        Mousetrap.bind('shift+right', this.playNextSong);
        Mousetrap.bind('shift+left', this.resetProgress);
        Mousetrap.bind('l', this.toggleLoop);
        Mousetrap.bind('s', this.toggleShuffle);
    }

    componentWillMount() {
        const localStorageRef = localStorage.getItem('jukebot-played-songs');

        if (localStorageRef) {
            this.setState({
                playedSongs: JSON.parse(localStorageRef)
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);

        Mousetrap.unbind('p', this.togglePlayPause);
        Mousetrap.unbind('shift+right', this.playNextSong);
        Mousetrap.unbind('shift+left', this.resetProgress);
        Mousetrap.unbind('l', this.toggleLoop);
        Mousetrap.unbind('s', this.toggleShuffle);
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.currentSong) {
            document.title = `${(!this.state.isPlaying) ? 'Paused - ' : ''}${this.state.currentSong.title}`;
        } else {
            document.title = 'Jukebot';
        }

        localStorage.setItem('jukebot-played-songs', JSON.stringify(nextState.playedSongs));
    }

    render() {
        return (
            <div className="fill-height">
                <Header name="Jukebot"/>
                <div className={"main " + (this.state.currentSong || this.state.playlist.length ? 'has-songs' : '')}>
                    <SongPicker results={this.state.results}
                                addToPlaylist={this.addToPlaylist}
                                removeFromResults={this.removeFromResults}
                                search={this.search}
                                isSearching={this.state.isSearching}
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
                               loop={this.state.loop}
                               toggleLoop={this.toggleLoop}
                               onEnd={this.onEnd}
                               clearPlaylist={this.clearPlaylist}
                               moveItem={this.moveItem}
                    />
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
