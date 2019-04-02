import React, { Component } from 'react'



//if a class has state, you need the constructor function. 
class Wolf extends Component {
  constructor() {
    super()

    this.state = {
      isWolfBig: false,
      borderColor:"" 
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isWolfBig: !this.state.isWolfBig
    })
  }
handleColorChange= e => {
  this.setState({
    borderColor: e.target.value
  })
}

  render() {
    
    let borderStyle= this.state.borderColor ? {border: `10px solid ${this.state.borderColor}`}: null


    let wolfStyle = this.state.isWolfBig ? { height: 900, width: 800 } : { height: 300, width: 280 }

    return (
      <div style={{...borderStyle, padding:40}}>
      <input type="text" onChange={this.handleColorChange} placeholder="color"/>
      {/* <button >Click</button> */}
        <img src="https://www.miamiherald.com/living/pets/m6s280/picture119250918/alternates/FREE_1140/download%20(1)" alt="dog" style={wolfStyle} onClick={this.handleClick} />

        <h3>Wolfy Boi</h3>


      </div>
    )
  }
}




export default Wolf 