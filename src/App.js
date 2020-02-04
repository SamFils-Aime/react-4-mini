import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { HashRouter } from 'react-router-dom'
import Routes from "./routes"


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Nav /> 
        {Routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;
