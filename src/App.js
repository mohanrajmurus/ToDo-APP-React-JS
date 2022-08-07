import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Todolist/>
        </div>
      </div>
    );
  }
}

export default App;
