import React, { Component } from 'react';

const container = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "0px",
    maxWidth: "100%",
    paddingBottom: "56.25%", // set screen ratio to 16:9
}

const player = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
}

export default class ResponsiveEmbedYoutube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc: this.props.videoSrc ? "http://www.youtube.com/embed/"+this.props.videoSrc : "http://www.youtube.com/embed/",
        };

    }

    render() {

        return (
            <div style={container}>
                <iframe style={player}
                // type="text/html" 
                src={this.state.videoSrc}
                frameBorder="0"
                allowFullScreen/>
            </div>
        );
    }
}