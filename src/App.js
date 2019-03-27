import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import "./App.css"
import Body from "./components/containers/Body"
import Landing from "./components/pages/Landing"
import Authentication from "./components/pages/Authentication"
import Register from "./components/pages/Register"
import Forgot from "./components/pages/Forgot"

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
      color: "#4FC95B",
    },
    h4: {
      fontWeight: 700,
      "text-transform": "capitalize"
    },
    body1: {
      fontSize: 18,
      marginTop: "10px",
    },
    body2: {
      fontSize: 18,
      marginTop: "10px",
      color: "#fff"
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

class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider theme={theme}>

      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route exact path='/login' component={Authentication} /> 
            <Route exact path='/signup' component={Register} /> 
            <Route exact path='/forgot' component={Forgot} /> 

            
            <Route path='/dashboard' component={Body} /> 
          </Switch>
        </BrowserRouter>
      </div>
      </MuiThemeProvider>
    )
  }
}


export default App
