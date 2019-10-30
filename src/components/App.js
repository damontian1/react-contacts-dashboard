import React from "react";
import Navigation from "./Navigation";
import ContactBook from "./ContactBook";
import Sidebar from "./Sidebar";
import { Provider } from './Context';

class App extends React.Component {

  render() {
    return (
      <Provider>
        <Navigation />
        <div className="wrapper" style={{ width: "85%", margin: "2em auto" }}>
          <div className="row">
            <ContactBook />
            <Sidebar />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;