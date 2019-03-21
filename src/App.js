import React, { Component } from "react"
import {BrowserRouter} from "react-router-dom"
import Body from './components/containers/Body';
import Header from './components/containers/Header';
import Footer from './components/containers/Body';
import HttpsRedirect from "react-https-redirect";

import "./App.css"



class App extends Component {
  render() {
    return (
    <HttpsRedirect>
      <BrowserRouter>
        <div>
          <Body></Body>
        </div>
      </BrowserRouter>
    </HttpsRedirect>
    )
  }
}

export default App
