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
          <nav className="navbar navbar-default">

            <div className="row">

              <div className="col-md-3">
                <div>
                  <a href="/">
                    <img src={"./assets/logo.png"} alt="" id="logo"/>
                  </a>
                </div>
              </div>

              <div className="col-md-5">
                <div style={{position: "relative"}}>
                  <input type="text" onKeyDown={props.handleKeyDown} onChange={props.handleSearchQuery} placeholder="Search Address Book by Name, Email, or Number" autoFocus style={{padding : "0.5em",width : "100%", borderRadius : "4px",background : "#3f4448",border : "transparent", color: "white", outline: "none"}} />
                  <ul className="list-group" style={{position: "absolute", zIndex: "1", width: "100%"}}>
                    {props.query ? renderSearchResults() : null}
                  </ul>
                </div>
              </div>

              <div className="col-md-4" style={{position: "relative"}}>
                <div className="alert alert-success hidden-xs hidden-sm" id="alert1">Contact Added!</div>
                <small className="pull-right hidden-xs hidden-sm" style={{position:"absolute", top: "20px", right: "15px", zIndex: "1"}}>Made by: Damon Tian</small>
              </div>

            </div>

          </nav>        
      </div>
    </section>
  )
}

export default Navigation;