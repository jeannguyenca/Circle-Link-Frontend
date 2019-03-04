import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.css"
import Body from "./components/containers/Body"
import Landing from "./components/pages/Landing"
import Authentication from "./components/pages/Authentication";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route path='/login' component={Authentication} /> 
            <Route path='/dashboard' component={Body} /> 
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}


export default App
