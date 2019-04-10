import React, { Component } from "react";



export default class Animal extends Component {



  render() {
    let { animal } = this.props

    return (

      <div style={{
        border: '1px solid #eee', margin: 10,
      }}>

        <img src={animal.imageUrl} alt="animalz" width="200" />
        <p>species: {animal.species}</p>
        <p>quantity: {animal.quantity}</p>


    </div>
    
    
      )
    }
    
}