import React from "react";

const ContactBookItem = function(props){
  // console.log(props.item)
  return(
    <div className="row" style={{border: "1px solid lightgray"}}>
      <div className="col-md-9">
        <h3>{props.item.name}</h3>
        <p>{props.item.email}</p>
        <p>{props.item.phone}</p>
      </div>
      <div className="col-md-3" style={{padding: "3em 1em"}}>
        <div className="btn-group">
          <button type="button" className="btn btn-default" onClick={props.handleEdit.bind(null, props.item)}>Edit</button>
          <button type="button" className="btn btn-default" onClick={props.handleDelete.bind(null, props.item.id)}>Delete</button>
        </div>
      </div>
    </div>  
  )
}

export default ContactBookItem;



