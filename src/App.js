import React, { Component } from "react";
import "./App.css";
// import Layout from "./components/Layout/index";
import LandingPage from "./components/Layout/Auth/LandingPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        {/* <Layout /> */}
      
      </div>
    );
  }
}

export default App;
