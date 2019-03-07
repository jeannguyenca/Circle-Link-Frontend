import React, { Component } from "react";
import "./App.css";
import Header from "./components/containers/Header";
import Layout from "./components/Layout/index";
import Body from "./components/containers/Body";
import Footer from "./components/containers/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Layout />
      
      </div>
    );
  }
}

export default App;
