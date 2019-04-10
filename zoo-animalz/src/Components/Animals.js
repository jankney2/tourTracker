import React, { Component } from "react"
import axios from "axios"
import Animal from './Animal'


export default class Animals extends Component {

constructor() {
  super()
  this.state= {
    animals: [],
  }
}

componentDidMount() {
  axios.get('/api/animals').then( (res)=>
    {this.setState({
      animals: res.data, 
    })}
  ).catch((err)=>console.log("err", err))
}


render() {
  return(

    this.state.animals.map(animal=> {
      return <Animal key={animal.id} animal={animal}/>
    })

  )
}












}