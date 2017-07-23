import React from "react";
import ContactForm from "./ContactForm";
import ApiWidget from "./ApiWidget";

const Sidebar = function(props){
  // console.log(props)
  return(
    <div className="col-md-4 col-sm-6">
      <ContactForm {...props}/>
      <ApiWidget news={props.news} currentWeather={props.currentWeather} forecastWeather={props.forecastWeather} />
    </div>
  )
}

export default Sidebar;


