import React from "react";
import ContactFormAdd from "./ContactFormAdd";
import ContactFormEdit from "./ContactFormEdit";

const ContactForm = function(props){
  // console.log(props)
  return(
    <div className="shadow-effect" style={{border: "1px solid lightgray", padding: "1.5em"}}>
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