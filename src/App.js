import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery.js';

class App extends Component {
  render() {
    return (
      <div className="App" bgcolor="#ffffff">
        <Gallery/>
      </div>
    );
  }
}

export default App;
