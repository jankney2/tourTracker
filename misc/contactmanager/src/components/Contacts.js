import React, {Component} from 'react'
import Contact from './Contact'

 class Contacts extends Component {
 state= {
       contacts: [{
         name:"john doe",
         email: "jdoe@gmail",
         phone: 848439348, 
         id: 1, 
       },
       {
        name:"bob",
        email: "bob@gmail",
        phone: 848439348, 
        id: 2, 
      },
      {
        email: "jimmu@gmail",
        name:"jfsldkfja",
        phone: 848439348, 
        id: 3, 
      },
      
      ],
     }
   
     deleteContact=(id)=> {
       const {contacts }= this.state
       const newContacts = contacts.filter(contact => contact.id!==id)

       this.setState({
         contacts: newContacts
       })
     }
  
    render() {
     
      const {contacts} = this.state
     
      return(
       <React.Fragment>
        {contacts.map(contact=> (
          <Contact 
          key={contact.id} 
          contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
        ))}

       </React.Fragment>
     )
   }
 }





 export default Contacts 