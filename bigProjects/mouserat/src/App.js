import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import ShowList from './components/ShowList'
import Navbar from './components/Navbar';
class App extends Component {

  
  render() {
  
    
    return (
      <div className="App">
        
      <Navbar />
      <ShowList />


      </div>
    );
  }
}

export default App;
