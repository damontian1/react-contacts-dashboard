import React from "react";
import ContactFormAdd from "./ContactFormAdd";
import ContactFormEdit from "./ContactFormEdit";

const ContactForm = function(props){
  console.log(props)
  return(
    <div>
      <div className="alert alert-success" id="alert1">Contact Added!</div>
      { 
        props.contactToEdit === "" ? 
        <ContactFormAdd handleSubmit={props.handleSubmit}/>
        :
        <ContactFormEdit contactToEdit={props.contactToEdit} handleUpdate={props.handleUpdate} handleEditChange={props.handleEditChange}/> 
      }
    </div>
  )
}

export default ContactForm;