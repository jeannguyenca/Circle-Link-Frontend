import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom"

import Menu from "./Menu"

import Stats from "../pages/Stats"
import Dashboard from "../pages/Dashboard"
import ViewCoupon from "../pages/ViewCoupon"
import CreateCoupon from "../pages/CreateCoupon"

const drawerWidth = 220

const styles = theme => ({
  root: {
    marginLeft: "40px"
  },
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

    const Wrapper = ({ children }) => (
      <div className={classes.root}>{children}</div>
    )
    return (
        <div className={classes.container}>
          <Menu />
          <Wrapper>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />

              <Route path="/dashboard/stat/customers" />
              <Route path="/dashboard/stat/coupons" component={Stats} />

              <Route
                path="/dashboard/coupons/create"
                component={CreateCoupon}
              />
              <Route path="/dashboard/coupons" component={ViewCoupon} />

              <Route path="/dashboard/collab/create" component={Stats} />
              <Route path="/dashboard/collab" component={Stats} />

              <Route path="/dashboard/support" component={Stats} />
              <Route path="/dashboard/feedback" component={Stats} />
            </Switch>
          </Wrapper>
        </div>
    )
  }
}
export default withStyles(styles)(Body)
