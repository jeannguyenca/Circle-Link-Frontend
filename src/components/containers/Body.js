import React, { Component } from "react";
import Login from "../pages/Login"

//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return <div className="container">
      <Login />
    </div>;
  }
}
export default Body;
