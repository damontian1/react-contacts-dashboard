import React from "react";
import ContactBookItem from "./ContactBookItem";

const ContactBook = function(props){
  // console.log(props)
  return(
    <div className="col-md-8">
          {props.contacts.slice(0).reverse().map((item, i) => {
            return(
              <ContactBookItem key={i} item={item} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
            )
          })}
    </div>
  )
}

export default ContactBook;