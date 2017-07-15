import React from "react";
import ContactFormAdd from "./ContactFormAdd";
import ContactFormEdit from "./ContactFormEdit";

const ContactForm = function(props){
  // console.log(props.contactToEdit)
  return(
    <div style={{padding: "2em 0em"}}>
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