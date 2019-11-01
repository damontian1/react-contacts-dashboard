import React from "react";
import ContactForm from "./ContactForm";
import ApiWidget from "./ApiWidget";
import { Consumer } from './Context';
import Spinner from "./Spinner";

const Sidebar = function () {
  return (
    <Consumer>
      {props => {
        return (
          <div className="col-md-4 col-sm-6">
            <ContactForm />
            {props.news.length > 0 ? <ApiWidget /> : <Spinner />}
          </div>
        )
      }}
    </Consumer>
  )
}

export default Sidebar;


