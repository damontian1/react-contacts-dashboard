import React from "react";

const Navigation = function(props){
  // console.log(props.contacts)
  //switch statement

  const filterName = () => {
    return props.contacts.filter(item => {
      return Object.keys(item).some(property => {
        return item[property].toString().toLowerCase().indexOf(props.query) != -1
      })
    })
  }

  const renderSearchResults = () => {
    var mapName = filterName()
    return mapName.map((item, i) => {
      return(
        <div key={i} onClick={props.handleQueryClick}>
          <a href={`#${item.id}`}>
            <li className="list-group-item">
              <h4>{item.name}</h4>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </li>
          </a>
        </div>
      )
    })
  }

  // console.log(filterName())

  return(
    <section id="navigation">
      <div className="navigation-wrapper" style={{width: "85%", margin: "0 auto"}}>
          <nav className="navbar navbar-default" style={{margin: "0", padding: "1em 0em"}}>

            <div className="row">

              <div className="col-md-2">
                <div>
                  <a href="/">
                    <img src={__dirname + "assets/react.png"} alt="" style={{width: "150px", margin: "0.5em 0em"}}/>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div style={{position: "relative"}}>
                  <input type="text" onChange={props.handleSearchQuery} placeholder="Search Address Book by Name, Email, or Number" style={{padding : "1em",width : "100%", borderRadius : "4px",background : "#3f4448",border : "transparent", color: "white"}}/>
                  <ul className="list-group" style={{position: "absolute", zIndex: "1", width: "100%"}}>
                    {props.query ? renderSearchResults() : null}
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="alert alert-success hidden-xs hidden-sm" id="alert1">Contact Added!</div>
                <small className="pull-right hidden-xs hidden-sm">Made by: Damon Tian</small>
              </div>

            </div>

          </nav>        
      </div>
    </section>
  )
}

export default Navigation;