import React, { Component } from 'react';
import './App.scss';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header name="Playlist"/>
      </div>
    );
  }
}

export default App;
