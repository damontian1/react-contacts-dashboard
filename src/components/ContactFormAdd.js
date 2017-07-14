import React from "react";

const ContactFormAdd = function(props){
  return(
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="well">
          <h3 className="text-center" style={{fontSize: "1.7em", fontWeight: "bold"}}>Add Contact</h3>
          <hr/>
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" className="form-control"/>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" className="form-control"/>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" className="form-control"/>
            </div>
              <input type="submit" value="Add Contact" className="btn btn-success form-control"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactFormAdd;