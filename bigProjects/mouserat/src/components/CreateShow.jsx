import React, { Component } from 'react'
import './CssFiles/CreateShow.css'

export default class CreateShow extends Component {

  constructor() {
    super()

    this.state = {

    }
  }

  changeHandler = (e) => {
    let prop = e.target.name
    this.setState({
      [prop]: e.target.value,

    })
  }


  render() {

    return (

      <div>

        <div className="inputHandler">
          <input
            name="imgUrl"
            onChange={this.changeHandler}

            type="text"
            placeholder="image URL" />



          <input
            name="date"
            onChange={this.changeHandler}

            type="text"
            placeholder="Date" />

          <input
            name="cityState"
            onChange={this.changeHandler}

            type="text" placeholder="City/State" />

          <input
            type="text"
            placeholder="venue name"
            name="venue"
            onChange={this.changeHandler} />



          <button type="submit" className="button" onClick={() => {


            let newObj = this.state
            if (!newObj.imgUrl) {
              alert("Please enter an Image URL")
            }
            if (!newObj.date) {
              alert("Please enter date")
            }
            if (!newObj.cityState) {
              alert("Please enter a city")
            }
            if (!newObj.venue) {
              alert("Please enter a venue name")
            } else {
              this.props.postClickHandler(newObj)
              
              let inputs= document.getElementsByTagName('input')
              for (let i=0; i<inputs.length; i++) {
                inputs[i].value=''
              }


            }
          }}>Create New Show! </button>
        </div>

      </div>

    )
  }
}