import React, { Component } from "react";
import Sound from "react-sound";

class Song extends Component {
    render() {
        return (
            <Sound 
                url = "./tarana.mp3"
                playStatus = {Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
             />
        )
    }
}

export default Song