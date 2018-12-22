import React, { Component } from 'react';
import './App.css';
//import Navbar from "./components/Navbar"
import Main from "./components/Main";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path = "/" render={() => (
            <div className = "App">
              <Main />
            </div>
          )}/>
          <Route exact={true} path = "/about" render={() => (
            <div className = "App">
              <About />
            </div>
          )}/>
          <Route exact={true} path = "/events" render={() => (
            <div className = "App">
              <Events />
            </div>
          )}/>
          <Route exact={true} path = "/contact" render={() => (
            <div className = "App">
              <Contact />
            </div>
          )}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
