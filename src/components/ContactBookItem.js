import React from "react";

const ContactBookItem = function(props){
  // console.log(props.item)
  return(
    <div id={props.item.id} className="shadow-effect" style={{border: "1px solid lightgray", padding: "1em", margin: "0em 0em 1em 0em"}}>
      <div className="row">
        <div className="col-md-9">
          <h3 className="bolder">{props.item.name}</h3>
          <p>{props.item.email}</p>
          <p>{props.item.phone}</p>
        </div>
        <div className="col-md-3" style={{padding: "3em 0em"}}>
          <div className="btn-group" style={{padding: "0.75em"}}>
            <a href="#contactForm">
              <button type="button" className="btn btn-default bolder" onClick={props.handleEdit.bind(null, props.item)}>Edit</button>
            </a>
            <a href="#contactForm">
              <button type="button" className="btn btn-default bolder" onClick={props.handleDelete.bind(null, props.item.id)}>Delete</button>
            </a>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default ContactBookItem;



