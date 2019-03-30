import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom"
import { Redirect } from "react-router-dom"

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
import getStoreId from "../../graphql/getStoreId"

import customerStat from "../../data/customers"
import couponStat from "../../data/coupons"

import fetchFunction from "../../graphql/fetchFunction"

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
      marginTop: "140px"
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
  state = {
    isLogin: true,
    fetched: false,
    storeId: "",
    userInfo: []
  }
  componentWillMount() {
    this.getUserInfo()
  }

  componentDidMount() {
    this.fetchstoreId()
  }

  getUserInfo = () => {
    let data = JSON.parse(sessionStorage.getItem("auth"))
    let userInfo = {
      id: data.userId,
      token: data.token
    }
    this.setState(userInfo)
  }

  async fetchstoreId() {
    let body = getStoreId()
    const resData = await fetchFunction(body, this.state.token)
    let result = resData.data.stores
        if (result.length !== 0) {
          this.setState({
            storeId: result[0]._id,
            email: result[0].creator.email,
            fetched: true
          })
        } else {
          this.setState({ fetched: false })
        }
  }

  logout = () => {
    sessionStorage.setItem("auth", "")
    sessionStorage.clear()
    this.setState({ isLogin: false })
  }

  render() {
    const { classes } = this.props

    const Wrapper = ({ children }) => (
      <div className={classes.root}>{children}</div>
    )
    if (this.state.fetched) {
      return (
        <div className={classes.container}>
          <Menu logout={this.logout} email={this.state.email} />
          {this.state.isLogin === false && (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )}
          <Wrapper>
            <Switch>
              {/* Dashboard home */}
              <Route exact path="/dashboard" component={Dashboard} />

              {/* Statistics */}
              <Route
                path="/dashboard/stat/customers"
                component={() => (
                  <Stats data={customerStat} keyData="customers" />
                )}
              />
              <Route
                path="/dashboard/stat/coupons"
                component={() => <Stats data={couponStat} keyData="coupons" />}
              />

              {/* Coupons */}
              <Route
                path="/dashboard/coupons/create"
                component={() => (
                  <CreateCoupon
                    token={this.state.token}
                    storeId={this.state.storeId}
                  />
                )}
              />
              <Route
                path="/dashboard/coupons"
                render={() => (
                  <ViewCoupon
                    token={this.state.token}
                    storeId={this.state.storeId}
                  />
                )}
              />

              {/* Collabs */}
              <Route
                path="/dashboard/collab/create"
                component={() => <ChooseCollab storeId={this.state.storeId} />}
              />
              <Route
                path="/dashboard/collab/createCoupon/:collabStore"
                render={({ match }) => (
                  <CreateCoupon
                    token={this.state.token}
                    storeId={this.state.storeId}
                    collabId={match.params.collabStore}
                  />
                )}
              />
              <Route
                path="/dashboard/collab"
                component={() => (
                  <ViewCoupon
                    token={this.state.token}
                    storeId={this.state.storeId}
                    option="collab"
                  />
                )}
              />

              <Route
                path="/dashboard/collab"
                component={() => (
                  <ViewCoupon storeId={this.state.storeId} option="collab" />
                )}
              />

              {/* Supports */}
              <Route path="/dashboard/support" component={Stats} />
              <Route path="/dashboard/feedback" component={Stats} />
            </Switch>
          </Wrapper>
        </div>
      )
    } else {
      return (
        <div>
          <Menu logout={this.logout} />
        </div>
      )
    }
  }
}
export default withStyles(styles)(Body)
