import React from "react";
import ContactFormAdd from "./ContactFormAdd";
import ContactFormEdit from "./ContactFormEdit";
import { Consumer } from './Context';

class ContactForm extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <div className="shadow-effect" style={{ border: "1px solid lightgray", padding: "1.5em" }}>
              {!props.contactToEdit.name ? <ContactFormAdd /> : <ContactFormEdit />}
            </div>
          )
        }}
      </Consumer >
    )
  }
}

export default ContactForm;