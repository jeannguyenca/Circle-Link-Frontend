import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch, Redirect } from "react-router-dom"

import Landing from "../pages/Landing"
import Authentication from "../pages/Authentication"
import Register from "../pages/Register"
import Forgot from "../pages/Forgot"

import Stats from "../pages/Stats"
import Dashboard from "../pages/Dashboard"
import ViewCoupon from "../pages/ViewCoupon"
import CreateCoupon from "../pages/CreateCoupon"
import NotFound from "../pages/NotFound404"
import ProtectedRoute from "./ProtectedRoute"
import Menu from './Menu';
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

const Body = ({ refetch, session }) => (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" exact component={Landing} />
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/login" render={() => <Authentication refetch={refetch} />} />
        <Route exact path="/signup" render={() => <Register refetch={refetch} />} />
        <Route exact path="/forgot" render={() => <Forgot refetch={refetch} />} />
        <Route exact
          path="/dashboard"
          render={() => <Dashboard session={session} />}
        />
        <Route exact path="/dashboard/stat/customers" />
        <Route exact path="/dashboard/stat/coupons" component={Stats} />

        <Route
          exact path="/dashboard/coupons/create"
          component={CreateCoupon}
        />
        <Route exact path="/dashboard/coupons" component={ViewCoupon} />

        <Route exact path="/dashboard/collab/create" component={Stats} />
        <Route exact path="/dashboard/collab" component={Stats} />

        <Route exact path="/dashboard/support" component={Stats} />
        <Route exact path="/dashboard/feedback" component={Stats} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
    )
export default Body
