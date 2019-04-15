import React, { Component } from 'react'
import axios from 'axios'
import Show from "./Show"
import CreateShow from './CreateShow';
import Footer from './Footer'
export default class ShowList extends Component {


  constructor() {
    super()
    this.state = {
      shows: [],
      searchVal: ''
    }
  }


//changeHandler/Put Req moved around
  


  //post request is done! 
  postClickHandler = (obj) => {
    axios.post('/api/shows', obj).then((res) => {
      this.setState({
        shows: res.data
      })
      console.log(res)
    }).catch((err) => console.log("error", err))
  }


//delete request done! 
  deleteHandler = (deleteId) => {

    axios.delete(`/api/shows/${deleteId}`).then((response) => {
      
      console.log(response.data)
      this.setState({
        shows: response.data
      })
    }).catch((err)=> console.log("error", err))

  }

  //component did mount sets state to response of the get request. 
  componentDidMount() {
    axios.get('/api/shows').then(
      (res) => { this.setState({ shows: res.data }) }
    ).catch((err) => console.log("err", err))
  }



  render() {
    return (
      <div>



        <CreateShow postClickHandler={this.postClickHandler} shows={this.shows} />

 {/* searchbar feature to search shows for certain cities */}
        
        
        <div className="searchInput">
        <label>Find your City</label>
       <input type="text" placeholder="search here" onChange= {(e)=>{
         this.setState({
          searchVal: e.target.value
         })


       }}/>

       </div>


{/* IF SOMETHING IS WRONG IT IS PROBABLY Here */}
        {this.state.shows.filter((element)=> {  
          return element.cityState.toUpperCase().includes(this.state.searchVal.toUpperCase())
        }).map((element) => {
          return <Show
            deleteHandler={this.deleteHandler}
            key={element.id}
            position={element.id}
            imgUrl={element.imgUrl}
            cityState={element.cityState}
            date={element.date}
            venue={element.venue}
            toggleTour={this.props.toggleTour}

            />
        })}


        <Footer />
      

      </div>
    )
  }


}