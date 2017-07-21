import React from "react";

const Navigation = function(){
  return(
    <section id="navigation">
      <div className="navigation-wrapper" style={{width: "80%", margin: "0 auto"}}>
          <nav className="navbar navbar-default" style={{margin: "0", padding: "1em 0em"}}>

            <div className="row">

              <div className="col-md-2">
                <div>
                  <img src={__dirname + "assets/react.png"} alt="" style={{width: "150px", margin: "0.5em 0em"}}/>
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <input type="text" placeholder="Searches Address Book as you type.." style={{padding : "1em",width : "100%", borderRadius : "4px",background : "#3f4448",border : "transparent"}}/>
                </div>
              </div>

              <div className="col-md-4">
                <div className="alert alert-success" id="alert1">Contact Added!</div>
              </div>

            </div>

          </nav>        
      </div>
    </section>
  )
}

export default Navigation;