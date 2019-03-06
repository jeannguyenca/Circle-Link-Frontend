import React, { Component } from "react";
import { Route, Link } from "react-router-dom"

import Header from "./Header"
//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      <div className="container">
          <div>This is dashboard</div>
          {/* <Route path="/dashboard/login" component={Authentication}/> */}
    </div>
      </React.Fragment>
)
  }
}
export default Body;
