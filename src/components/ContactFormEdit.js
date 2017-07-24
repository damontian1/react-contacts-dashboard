import React from "react";

const ContactFormEdit = function(props){
  // console.log(props)
  return(
    <section id="contactForm">
      <h3 className="text-center" style={{fontSize: "1.4em", fontWeight: "bold"}}>Update Contact</h3>
      <form onSubmit={props.handleUpdate}>
          <input type="hidden" name="id" value={props.contactToEdit.id}/>
          <div className="input-group">
            <span className="input-group-addon bolder" htmlFor="name">Full Name</span>
            <input type="text" name="name" className="form-control contact-form-field" value={props.contactToEdit.name} onChange={props.handleEditChange.bind(null, "name")}/>
          </div>
          <div className="input-group">
            <span className="input-group-addon bolder" htmlFor="phone">Phone Number</span>
            <input type="tel" name="phone" className="form-control contact-form-field" value={props.contactToEdit.phone} onChange={props.handleEditChange.bind(null, "phone")}/>
          </div>
          <div className="input-group">
            <span className="input-group-addon bolder" htmlFor="email">Email Address</span>
            <input type="email" name="email" className="form-control contact-form-field" value={props.contactToEdit.email} onChange={props.handleEditChange.bind(null, "email")}/>
          </div>
          <input type="submit" value="Submit Changes" className="btn btn-success form-control contact-form-button bolder"/>

      </form>
    </section>
  )
}

export default ContactFormEdit;