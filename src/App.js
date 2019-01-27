import React, { Component } from "react";
import "./App.css";
import Header from "./components/containers/Header";
import Body from "./components/containers/Body";
import Footer from "./components/containers/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
