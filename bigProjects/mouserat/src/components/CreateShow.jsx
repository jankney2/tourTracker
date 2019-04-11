import React, {Component} from 'react'
import axios from "axios"

export default class CreateShow extends Component {

constructor() {
  super()
  
  this.state={

  }
}

changeHandler= (e) => {
  let prop= e.target.name
  this.setState({
    [prop]: e.target.value,

  })
}


// postClickHandler=() => {
//   axios.post('/api/shows', {
//     date: this.state.date,
//     venue: this.state.venue, 
//     cityState: this.state.cityState, 
//     imgUrl: this.state.imgUrl, 
//   } ).then((res)=> {
//     this.setState({
//       shows: res.data
//     })
//     console.log(res)
//   }).catch((err)=>console.log("error", err))
// }

  render() {
    
    return(

      <div>
      <h1>Create new Show</h1>
      <input 
      type="text"
       placeholder="venue name"
        name="venue"
        onChange={this.changeHandler}
        
        />
      <input 
      name="cityState"
      onChange={this.changeHandler}
      
      type="text" placeholder="City/State"/>
      
      
      <input 
      name="date"
      onChange={this.changeHandler}
      
      type="date"
       placeholder="Date"/>

      <input 
      name="imgUrl"
      onChange={this.changeHandler}
      
      type="text"
       placeholder="image URL"/>
      
      
      <button onClick={()=>{
        let newObj= this.state
        this.props.postClickHandler(newObj)}}>Create Show!</button>
    </div>

    )
  }
}