import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom"
// import { Query } from "react-apollo"
// import { Redirect } from "react-router-dom"
// import gql from "graphql-tag"
// import { ApolloConsumer } from "react-apollo"

import Menu from "./Menu"

import Stats from "../pages/Stats"
import Dashboard from "../pages/Dashboard"
import ViewCoupon from "../pages/ViewCoupon"
import CreateCoupon from "../pages/CreateCoupon"
import ChooseCollab from "../pages/ChooseCollab"

import customerStat from "../../data/customers.js"
import coupnStat from "../../data/coupons.js"

const drawerWidth = 220

const styles = theme => ({
  container: {
    marginLeft: `calc(${drawerWidth}px)`,
    marginRight: `60px`,
    marginTop: "100px",
    maxWidth: "1200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      marginTop: "100px"
    }
  },
  root: {
    marginLeft: "60px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "60px",
      marginRight: "60px"
    }
  }
})

class Body extends Component {
  render() {
    const { classes } = this.props

    const Wrapper = ({ children }) => (
      // <ApolloConsumer>

      // </ApolloConsumer>
      // <Query query={IS_LOGGED_IN}>
      //   {({ data }) =>
      //     data.isLoggedIn ? (
      //       <div className={classes.root}>{children}</div>
      //     ) : (
      //       <Redirect
      //         to={{
      //           pathname: "/login"
      //         }}
      //       />
      //     )
      //   }
      // </Query>
      <div className={classes.root}>{children}</div>
    )
    return (
      <div className={classes.container}>
        <Menu />
        <Wrapper>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />

            <Route
              path="/dashboard/stat/customers"
              component={() => (
                <Stats data={customerStat} keyData="customers" />
              )}
            />
            <Route
              path="/dashboard/stat/coupons"
              component={() => <Stats data={coupnStat} keyData="coupons" />}
            />

            <Route path="/dashboard/coupons/create" component={CreateCoupon} />
            <Route path="/dashboard/coupons" component={ViewCoupon} />

            <Route path="/dashboard/collab/create" component={ChooseCollab} />
            <Route
              path="/dashboard/collab/createCoupon/:collabStore"
              component={CreateCoupon}
            />
            <Route
              path="/dashboard/collab"
              component={() => (
                <ViewCoupon
                  storeId="5c8964fd425d32025f175ad5"
                  option="collab"
                />
              )}
            />

            <Route path="/dashboard/support" component={Stats} />
            <Route path="/dashboard/feedback" component={Stats} />
          </Switch>
        </Wrapper>
      </div>
    )
  }
}
export default withStyles(styles)(Body)
