import React, { Component } from 'react'

import axios from "axios"

import './CssFiles/Show.css'
import './CssFiles/EditShow.css'

export default class Show extends Component {
  constructor(props) {
    super(props)
    //CHANGE EDIT BACK TO TRUE! 
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
      //ternary 1- edit view
      this.state.edit ?

        <div>
          <div className='showContainer'>

            <img src={this.props.imgUrl} alt='' width="80px" />
            <p>{this.props.date}</p>
            <p>{this.props.venue}</p>
            <p>{this.props.cityState}</p>


            <div>
            <input type="text" placeholder="New Image URL" name="imgUrl" onChange={this.changeHandler} />

            <input type="date" placeholder="New date" name="date" onChange={this.changeHandler} />

            <input type="text" placeholder="New venue" name="venue" onChange={this.changeHandler} />

            <input type="text" placeholder="new City/State" name="cityState" onChange={this.changeHandler} />
          
          
          <button className="button" onClick={this.toggleEdit}>Cancel</button>
  
          <button className="button" onClick={() => {
            this.putReq(this.props.position)
            this.toggleEdit()
            window.location.reload()
          }}>Save</button>
            
            
            </div>
          </div>
        </div>
        :
        
        //ternary 2- non-edit view

        <div className="showContainer">
          <img src={this.props.imgUrl} alt='' width="100px" />
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