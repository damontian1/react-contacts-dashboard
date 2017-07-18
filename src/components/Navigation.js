import React from "react";

const Navigation = function(){
  return(
    <section id="navigation">
      <nav className="navbar navbar-default">
          <div className="navbar-header" style={{float: "left"}}>
            <a className="navbar-brand" href="#">React</a>
            <input type="text" placeholder="Searches Address Book as you type.." style={{padding : "1em",width : "500px", borderRadius : "10px",background : "#3f4448",border : "transparent"}}/>
          </div>
          <div className="navbar-header" style={{float: "right"}}>
            <a className="navbar-brand" href="#">React Flux Address Book Dashboard</a>
          </div>
      </nav>
    </section>
  )
}

export default Navigation;