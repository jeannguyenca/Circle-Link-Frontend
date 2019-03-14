import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import Stats from "../pages/Stats"

import Header from "./Header"
import Menu from "./Menu"
//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    const { match } = this.props
    return (
      <React.Fragment>
        <Menu />
        <Header />

        <div className="container">
          <div>This is dashboard</div>

          <Route path={`${match.path}/stat`} component={Stats} />

          {/* <Menu /> */}
        </div>
      </React.Fragment>
    )
  }
}
export default Body
