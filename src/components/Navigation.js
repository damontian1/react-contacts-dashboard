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
                  <div className="py-3" style={{ display: "grid", gridTemplateColumns: "1fr 5fr", alignItems: "center", gridColumnGap: "1.5rem", textAlign: "left" }}>
                    <div>
                      <a href="/">
                        <img src={logo} alt="" id="logo" />
                      </a>
                    </div>
                    <div style={{ position: "relative" }}>
                      <input type="text" onChange={props.handleSearchQuery} placeholder="Search Address Book by Name, Email, or Number" autoFocus style={{ padding: "0.5em", width: "100%", borderRadius: "4px", background: "#3f4448", border: "transparent", color: "white", outline: "none" }} />
                      <ul className="list-group" style={{ position: "absolute", zIndex: "1", width: "100%" }}>
                      </ul>
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