import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import SongPicker from './SongPicker';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header name="Playlist"/>
        <SongPicker />
      </div>
    );
  }
}

export default App;
