import React, {Component} from 'react'
import "./CssFiles/HomePage.css"
import Instafeed from 'instafeed.js'
export default class Home extends Component {

  

  render() {
    let feed= new Instafeed({
      get:'tagged',
      tagName: 'brycecanyon', 
      clientId: '6b8205113ba54412866a7d2c3130a656'
    });
    
    
    return(

      <div className="homePage">
        <h3>MouseRat</h3>

        <h2 className="tourDates"> New Tour Dates Announced</h2>
        <p> Touring the Northwest with Land Ho! May 2019</p>
        
        
        <button className= "button" onClick={()=>{
          this.props.toggleTour()
        }}>View Tour Schedule</button>
        


        <div id="instafeed">{
          

          feed.run()
        }</div>

        <div>Social Links or Footer (import?)</div>

      </div>


    )
  }



}