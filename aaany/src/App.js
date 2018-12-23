import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Gallery2018 from "./components/Gallery2018";
import Song from "./components/Song";
import Main from "./pages/Main";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Song />
          <Navbar />
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
          <Route exact={true} path = "/donate" render={() => (
            <div className = "App">
              <Donate />
            </div>
          )}/>
          <Route exact={true} path = "/gallery2018" render={() => (
            <div className = "App">
              <Gallery2018 />
            </div>
          )}/>
          <div className="copyright text-center">© 2018 Aligarh Alumni Association New York. All Rights Reserved.</div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
