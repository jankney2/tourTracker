import React, {Component} from 'react'
import axios from 'axios'
import Show from "./Show"
export default class ShowList extends Component {


  constructor() {
    super()
    this.state = {
      shows: []
    }
  }
  

//component did mount sets state to response of the get request. 
componentDidMount() {
  axios.get('/api/shows').then(
     (res)=> {this.setState({shows: res.data})}
  ).catch((err)=>console.log("err", err))
}


render() {
  return(
    <div>
      {this.state.shows.map((element)=>{
        return <Show />
      })}
    </div>
  )
}


}