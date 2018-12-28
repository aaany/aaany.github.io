import React, { Component } from "react";
import "./Events.css"
import { Link } from "react-router-dom";

class Events extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <tr>
                        <th>
                            Upcoming Events
                        </th>
                        <th>
                            Date
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Sir Syed Day Mushaira 2019
                        </td>
                        <td>
                            October 2019
                        </td>
                    </tr>
                    <br></br>
                    <h3>Click on the following links to view photos from past events.</h3>
                    <tr>
                        <th>
                            Past Events
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/gallery2018">Sir Syed Day Mushaira 2018</Link>
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}
export default Events;