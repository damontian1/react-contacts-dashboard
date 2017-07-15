import React from "react";

const ContactFormAdd = function(props){
  return(
    <section id="contactForm">
      <h3 className="text-center" style={{fontSize: "1.4em", fontWeight: "bold"}}>Add Contact</h3>
      <form onSubmit={props.handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="name">Full Name</span>
          <input type="text" name="name" className="form-control contact-form-field"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="phone">Phone Number</span>
          <input type="tel" name="phone" className="form-control contact-form-field"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="email">Email Address</span>
          <input type="email" name="email" className="form-control contact-form-field"/>
        </div>
          <input type="submit" value="Add Contact" className="btn btn-success form-control contact-form-button"/>
      </form>
    </section>
  )
}

export default ContactFormAdd;