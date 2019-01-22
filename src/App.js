import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
class App extends Component {
  render() {
    return (
      <Welcome name="Bonjour"/>
    );
  }
}

export default App;
