import React from "react";

const ContactFormEdit = function(props){
  // console.log(props)
  return(
    <div className="well">
      <h4 className="text-center">Update Contact</h4>
      <hr/>
      <form onSubmit={props.handleUpdate}>
        <div className="form-group">
          <input type="hidden" name="id" value={props.contactToEdit.id}/>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" className="form-control" value={props.contactToEdit.name} onChange={props.handleEditChange.bind(null, "name")}/>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" className="form-control" value={props.contactToEdit.phone} onChange={props.handleEditChange.bind(null, "phone")}/>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" className="form-control" value={props.contactToEdit.email} onChange={props.handleEditChange.bind(null, "email")}/>
        </div>
          <input type="submit" value="Submit Changes" className="btn btn-success form-control"/>
      </form>
    </div>
  )
}

export default ContactFormEdit;