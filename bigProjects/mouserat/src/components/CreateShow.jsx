import React, {Component} from 'react'
import './CssFiles/CreateShow.css'

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
      
      
      <button className="button" onClick={()=>{
        let newObj= this.state
        this.props.postClickHandler(newObj)
        // document.getElementsByTagName("input").map(element=> element.innerText='')
       }}>Create New Show! </button>
    </div>

    )
  }
}