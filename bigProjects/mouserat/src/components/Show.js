import React, {Component} from 'react'

import axios from "axios"

export default class Show extends Component {

  

render(){
  return(
    <div>
      <img src={this.props.imgUrl} alt='' width="80px"/>
      <p>{this.props.date}</p>
      <p>{this.props.venue}</p>
      <p>{this.props.cityState}</p>


    </div>
  )
}

}