import React, { Component } from "react";

import logo from "../images/logo.png";

const logoStyle = {
    width: "225px"
}

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/">
                        <img src={ logo } href="/" alt = "Logo" style = {logoStyle}></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donate">Donate</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;