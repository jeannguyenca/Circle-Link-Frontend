import React, { Component } from "react"
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <header>
        <h1>This is the header</h1>
        <p>{match.path}</p>
      </header>
    );
  }
}


export default (withRouter)(Header)
