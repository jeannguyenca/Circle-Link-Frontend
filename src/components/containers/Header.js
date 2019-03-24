import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { styled } from "@material-ui/styles"

import AppBar from "../parts/Landing/AppBarCollapse"

const Wrapper = styled("div")({
  position: "sticky",
  top: 0,
  background: "white",
  zIndex: 999
})

class Header extends Component {
  render() {
    const { match } = this.props
    return <Wrapper>{match.path === "/" && <AppBar />}</Wrapper>
  }
}

export default withRouter(Header)
