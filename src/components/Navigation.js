import React from "react";
import ContactFormEdit from "./ContactFormEdit";
import { Consumer } from './Context';
import logo from '../assets/logo.png';


class Navigation extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {

          return (
            <section id="navigation">
              <div className="navigation-wrapper" style={{ width: "85%", margin: "0 auto" }}>
                <nav className="navbar navbar-default">
                  <div className="row">
                    <div className="col-md-3">
                      <div>
                        <a href="/">
                          <img src={logo} alt="" id="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div style={{ position: "relative" }}>
                        <input type="text" onChange={props.handleSearchQuery} placeholder="Search Address Book by Name, Email, or Number" autoFocus style={{ padding: "0.5em", width: "100%", borderRadius: "4px", background: "#3f4448", border: "transparent", color: "white", outline: "none" }} />
                        <ul className="list-group" style={{ position: "absolute", zIndex: "1", width: "100%" }}>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4" style={{ position: "relative" }}>
                      <div className="alert alert-success hidden-xs hidden-sm" id="alert1">Contact Added!</div>
                      <small className="pull-right hidden-xs hidden-sm" style={{ position: "absolute", top: "20px", right: "15px", zIndex: "1" }}>Made by: Damon Tian</small>
                    </div>
                  </div>
                </nav>
              </div>
            </section>
          )

        }}
      </Consumer>
    )
  }

}

export default Navigation;