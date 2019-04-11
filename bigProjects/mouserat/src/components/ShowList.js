import React, { Component } from 'react'
import axios from 'axios'
import Show from "./Show"
import CreateShow from './CreateShow';
export default class ShowList extends Component {


  constructor() {
    super()
    this.state = {
      shows: [],
      venue: ''
    }
  }


  //component did mount sets state to response of the get request. 
  componentDidMount() {
    axios.get('/api/shows').then(
      (res) => { this.setState({ shows: res.data }) }
    ).catch((err) => console.log("err", err))
  }



  render() {
    return (
      <div>
        {/* navbar */}


        <CreateShow />

              {this.state.shows.map((element) => {
                return <Show
                  key={element.id}
                  imgUrl={element.imgUrl}
                  cityState={element.cityState}
                  date={element.date}
                  venue={element.venue} />
              })}
    </div>
            )
          }
          
          
}