import React, { Component } from 'react';
import logo from './logo.svg';
import HelloHooks from './HelloHooks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <HelloHooks />      
        </header>
      </div>
    );
  }
}

export default App;
