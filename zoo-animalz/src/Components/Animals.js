import React, { Component } from "react"
import axios from "axios"
import Animal from './Animal'
import CreateAnimal from './CreateAnimal'

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

createAnimal= (newAnimal) => {
  axios.post('/api/animals', newAnimal).then( (res)=>{
    this.setState({
      animals: res.data
    })}
  ).catch((err)=>console.log("err", err)) 
}

render() {
  return(
    <div>
    <CreateAnimal createAnimal={this.createAnimal}/>
{    this.state.animals.map(animal=> {
      return <Animal key={animal.id} animal={animal}/>
    })}

</div>

  )
}












}