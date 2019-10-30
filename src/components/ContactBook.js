import React from "react";
import { Consumer } from './Context';

class ContactBook extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <div className="col-md-8 col-sm-6" >
              {props.contacts.slice(0).reverse().map((item, i) => {
                return (
                  <div key={i} id={item.id} className="shadow-effect" style={{ border: "1px solid lightgray", padding: "1em", margin: "0em 0em 1em 0em" }}>
                    <div className="row">
                      <div className="col-md-9">
                        <h3 className="bolder">{item.name}</h3>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                      </div>
                      <div className="col-md-3" style={{ padding: "3em 0em" }}>
                        <div className="btn-group" style={{ padding: "0.75em" }}>
                          <a href="#">
                            <button type="button" className="btn btn-default bolder" onClick={props.handleEdit.bind(null, item)}>Edit</button>
                          </a>
                          <a href="#">
                            <button type="button" className="btn btn-default bolder" onClick={props.handleDelete.bind(null, item.id)}>Delete</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div >
                )
              })}
            </div>
          )
        }}
      </Consumer>
    )

  }
}

export default ContactBook;