import React from "react";

const ContactBookItem = function(props){
  // console.log(props.item)
  return(
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.phone}</td>
      <td>{props.item.email}</td>
      <td>
        <button className="btn btn-default" style={{margin: "0 0.5em"}} onClick={props.handleEdit.bind(null, props.item)}>Edit</button>
        <button className="btn btn-danger" onClick={props.handleDelete.bind(null, props.item.id)}>Delete</button>
      </td>
    </tr>
  )
}

export default ContactBookItem;


