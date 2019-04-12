import React, { Component } from 'react';
import Home from './components/Home'
import './App.css';
import ShowList from './components/ShowList'
import Navbar from './components/Navbar';
class App extends Component {

  constructor() {
    super()
    this.state= {
      homepage:true,
    }
  }
  

  toggleTour = () => {
    this.setState({
      homepage: !this.state.homepage,
    })
  }
  render() {
  
    
    return (
      //homepage ternary
      this.state.homepage ?

      <div>
        <Home toggleTour={this.toggleTour}/>


      </div>
      
      //if false 
      :
      <div>
        
      <Navbar toggleTour={this.toggleTour}/>
      <ShowList />


      </div>
    );
  }
}

export default App;
