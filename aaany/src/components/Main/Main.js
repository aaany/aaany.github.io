import React, { Component } from "react";
import Navbar from "../Navbar"

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>This is in main</div>
            </React.Fragment>
        );
    }
}

export default Main;