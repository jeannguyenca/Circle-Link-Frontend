import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import ApolloClient from "apollo-boost";


import "./App.css"
import Body from "./components/containers/Body"
import Landing from "./components/pages/Landing"
import Authentication from "./components/pages/Authentication"
import Register from "./components/pages/Register"
import Forgot from "./components/pages/Forgot"

import Dashboard from "./components/pages/Dashboard"


//custom theme color
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontWeight: 700,
      "text-transform": "capitalize",
    },
    h2: {
      fontWeight: 700,
      "text-transform": "capitalize",
      color: "#4FC95B"
    },
    h4: {
      fontWeight: 700,
      "text-transform": "capitalize"
    },
    body1: {
      fontSize: 18,
      marginTop: "10px",
      color: "#fff"
    },
    body2: {
      fontSize: 18,
      marginTop: "10px",
    },
    caption: {
      fontSize: 16,
      color: "#FC5185",
      display: "inline",
      fontWeight: "900"
    },
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#4FC95B",
      contrastText: "#fff"
    },
    secondary: {
      main: "#000"
    }
  },
  overrides: {
    MuiButton: {
      // override root styles for the button component.
      root: {
        borderRadius: 50,
        padding: "5px 30px !important",
        "text-transform": "capitalize",
        fontSize: 16,
      }
    }
  }
})


const App = ({ refetch, session }) => (
  <Router>
    <Fragment>
      {/* <Navbar session={session} /> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/search" component={Search} /> */}
        <Route path="/login" render={() => <Authentication refetch={refetch} />} />
        <Route path="/signup" render={() => <Register refetch={refetch} />} />
        <Route path="/forgot" render={() => <Forgot refetch={refetch} />} />
        <Route
          path="/dashboard"
          render={() => <Dashboard session={session} />}
        />
        <Redirect
          to="/dashboard"/>}
        />
        {/* <Route
          path="/store"
          render={() => <CreateStore session={session} />}
        /> */}
        {/* <Route path="/store/:_id" component={StorePage} /> */}
        {/* <Route path="/store/coupon" render={() => <Coupon session={session} />} /> */}
        {/* <Route path="/store/coupon" render={() => <Coupon session={session} />} /> */}
      </Switch>
    </Fragment>
  </Router>
);

export default App
