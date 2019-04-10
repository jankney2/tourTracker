import React, {Component} from "react"
import { format } from "url";



export default class CreateAnimal extends Component {
  constructor() {
    super()
    this.state= {
      species:'',
      quantity: 0,
      imageUrl:'',
    }
  }


  handleChange=(e)=> {
    let {value, name}= e.target
    this.setState({
    [name]: value   
    })
  }

  handleClick = ()=> {
    let newAnimal= this.state
   
  //  console.log(newAnimal, "yo")
    this.props.createAnimal(newAnimal)

  }

  render() {

    return(


    <div style={{border: "1px solid black", margin: 20}}>
        
        
        <input placeholder="species" type="text" name="species" onChange= {this.handleChange}/> 
        
        <input placeholder="imageUrl" type="url" name="imageUrl" onChange= {this.handleChange}/> 

        <input placeholder="quantity" type="number" name="quantity" onChange= {this.handleChange}/> 

      <button onClick={this.handleClick}>Submit</button>



      </div>



    )
  }




}