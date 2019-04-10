import React, { Component } from 'react';
import Animals from './Components/Animals.js'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div>
      <header style= {{borderBottom: '1px solid #fff333'}}>
        <h1>Our Zoo Animals!</h1>
      </header>
      
      <Animals />
      </div>
    );
  }
}

export default App;
