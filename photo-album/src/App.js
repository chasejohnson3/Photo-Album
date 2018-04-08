import React, { Component } from 'react';
import './App.css';
import Background from './Background';

class App extends Component {
  render() {
    return (
      <div className="App" bgcolor="#ffffff">
        <Background/>
      </div>
    );
  }
}

export default App;
