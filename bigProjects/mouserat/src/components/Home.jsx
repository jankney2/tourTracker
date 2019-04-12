import React, {Component} from 'react'
import "./CssFiles/HomePage.css"

export default class Home extends Component {

  

  render() {
    return(

      <div className="homePage">
        <h3>MouseRat</h3>

        <h2 className="tourDates"> New Tour Dates Announced</h2>
        <p> Touring the Northwest with Land Ho! May 2019</p>
        
        
        <button className= "button" onClick={()=>{
          this.props.toggleTour()
        }}>View Tour Schedule</button>
        


        <div className="instagramFeed">Instagram feed</div>

        <div>Social Links or Footer (import?)</div>

      </div>


    )
  }



}