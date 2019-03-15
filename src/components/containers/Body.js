import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Link, Switch } from "react-router-dom"
import Stats from "../pages/Stats"

import Menu from "./Menu"

const drawerWidth = 220

const styles = theme => ({
  container: {
    width: `calc(100% - drawerWidth)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0
    }
  }
})
class Body extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Menu />
        <Switch>
          <Route path="/dashboard/stat/customers" component={Stats} />
        </Switch>
      </div>
    )
  }
}
export default withStyles(styles)(Body)
