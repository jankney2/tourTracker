import React, {Component} from 'react'
import './CssFiles/Navbar.css'


export default class Navbar extends Component {

  render() {
    return(


<div className="navBar">
      <style ref="stylesheet" link="./CssFiles/Navbar.css"></style>
      <h1>MouseRat Tour Manager</h1>
      
      <nav>
      <button className="button" onClick= {()=> {
        this.props.toggleTour()
      }}>Home</button>

      </nav>
              
      </div>
    )
  }





}