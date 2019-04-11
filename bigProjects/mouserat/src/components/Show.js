import React, { Component } from 'react'

import axios from "axios"

import './CssFiles/Show.css'

export default class Show extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      imgUrl: this.props.imgUrl,
      date: this.props.date,
      venue: this.props.venue,
      cityState: this.props.cityState,
    }


  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,

    })

  }

  changeHandler = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })

  }

  //small bugs
  //put request is done, but requires you to reload the page for changes to take effect. 

  //when you try to do a put request, if you type into a box then delete it, it comes back blank (you can ONLY type in to boxes that you want to edit)
  putReq = (putId) => {

    axios.put(`/api/shows/${putId}`, this.state).then(

      (response) => {
        // this.toggleEdit()
        this.setState(response.data)
      }


    ).catch((err) => console.log("error", err)

    )


  }

  render() {
    return (
      this.state.edit ?
        <div className='showContainer'>

          <img src={this.props.imgUrl} alt='' width="80px" />
          <input type="text" placeholder="New Image URL" name="imgUrl" onChange={this.changeHandler} />

          <p>{this.props.date}</p>
          <input type="date" placeholder="New date" name="date" onChange={this.changeHandler} />

          <p>{this.props.venue}</p>
          <input type="text" placeholder="New venue" name="venue" onChange={this.changeHandler} />

          <p>{this.props.cityState}</p>
          <input type="text" placeholder="new City/State" name="cityState" onChange={this.changeHandler} />


          <button onClick={this.toggleEdit}>cancel</button>
          <button onClick={() => {
            this.putReq(this.props.position)
            this.toggleEdit()
            window.location.reload()
          }}>Save Show!</button>
        </div> :



        <div className="showContainer">
          <img src={this.props.imgUrl} alt='' width="80px" />
          <div className="pContainer">
            <p>{this.props.date}</p>
            <p>{this.props.venue}</p>
            <p>{this.props.cityState}</p>
          </div>
          <div className="buttonContainer">
            <button className="button"
              onClick={() => {
                this.toggleEdit()
                //  show boxes for new values
                // send values from new boxes in the request
                //




              }}

            >Edit</button>



            <button className="button" onClick={() => {
              console.log(this.props.position)
              this.props.deleteHandler(this.props.position)
            }}>Delete</button>
          </div>


        </div>
    )
  }

}