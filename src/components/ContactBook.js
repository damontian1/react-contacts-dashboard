import React from "react";
import ContactBookItem from "./ContactBookItem";


const ContactBook = function(props){
  console.log(props)
  return(
    <div className="row" style={{padding: "3em 0"}}>
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-heading text-center" style={{fontSize:"1.7em", fontWeight: "bold"}}>Contact Book</div>
            <table className="table text-center">
              <tbody>
                <tr>
                  <th className="text-center">Full Name</th>
                  <th className="text-center">Phone Number</th>
                  <th className="text-center">Email Address</th>
                  <th className="text-center">Actions</th>
                </tr>
                  {props.contacts.map((item, i) => {
                    return(
                      <ContactBookItem key={i} item={item} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
                    )
                  })}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default ContactBook;