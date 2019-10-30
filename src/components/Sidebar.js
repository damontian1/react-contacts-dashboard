import React from "react";
import ContactForm from "./ContactForm";
import ApiWidget from "./ApiWidget";

const Sidebar = function (props) {
  return (
    <div className="col-md-4 col-sm-6">
      <ContactForm />
      <ApiWidget />
    </div>
  )
}

export default Sidebar;


