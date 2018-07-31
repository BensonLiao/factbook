import React, { Component } from "react";

const apiKeyStatic = "AIzaSyBICXp3tzYgW6HqPdZ4MXfq9rLWXF8WO9o";
const apiKeyEmbed = "AIzaSyC-FJ6zS9Mu4eMoHi6ZdDJH_WMF9jJD4bI";
const apiKeyJS = "AIzaSyCFaHiJsTAOcp6ftJhB_2i7ra7pXAvgo4I";
var map;

export default class ResponsiveEmbedGoogleMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // center: this.props.center ? this.props.center : "25.025951,121.527489",
            center: this.props.center ? this.props.center : "National+Taiwan+Normal+University,Taipei+City,Taiwan",
            hideMarker: this.props.hideMarker ? "center" : "markers",
            mapWidth: this.props.mapWidth ? this.props.mapWidth : "600",
            mapHeight: this.props.mapHeight ? this.props.mapHeight : "450",
            mapType: this.props.mapType ? this.props.mapType : "roadmap",
            imageFormat: this.props.imageFormat ? this.props.imageFormat : "png",
        };
        
    }

    openEmbedMap = () => { 
        // console.log(screen.width);
        let mapContainerEL = document.querySelector("#embed_map_container");
        // console.log(mapContainerEL.offsetWidth);
        // console.log((mapContainerEL.offsetWidth / 4) * 3 + "px");
        // mapContainerEL.style.height = "450px";
        mapContainerEL.style.height = (mapContainerEL.offsetWidth / 4) * 3 + "px"; // keep screen ratio to 4:3
        // if (screen.width < 600) mapContainerEL.style.height = "300px";

        let mapEL = document.querySelector("#embed_map_ntnu");
        let mapSrc = mapEL.getAttribute("data-iframe-src");
        let mapStyle = mapEL.getAttribute("data-iframe-style");
        let mapWidth = mapEL.getAttribute("data-iframe-width");
        let mapHeight = mapEL.getAttribute("data-iframe-height");
        // console.log(mapStyle);
        let mapHTML = "<iframe src='" + mapSrc + "'" +
        " style='position: relative; top: 0; left: 0; width: 100%; height: 100%;'" +
        " frameBorder='0' allowFullScreen></iframe>";
        mapEL.innerHTML = mapHTML;
    };

    initMap = () => { 
        // console.log(screen.width);
        let mapContainerEL = document.querySelector("#embed_map_container");
        // console.log(mapContainerEL.offsetWidth);
        // console.log((mapContainerEL.offsetWidth / 4) * 3 + "px");
        // mapContainerEL.style.height = "450px";
        mapContainerEL.style.height = (mapContainerEL.offsetWidth / 4) * 3 + "px"; // keep screen ratio to 4:3
        // if (screen.width < 600) mapContainerEL.style.height = "300px";
        map = new google.maps.Map(mapContainerEL, {
            center: this.state.center,
            zoom: 15
        });

        let mapScript = document.createElement('script');
        mapScript.setAttribute('async');
        mapScript.setAttribute('defer');
        mapScript.setAttribute('src','//maps.googleapis.com/maps/api/js?key='+apiKeyJS+'&callback=initMap');
        document.body.appendChild(mapScript);
    };

    render() {

        const staticImageSrc = "//maps.googleapis.com/maps/api/staticmap?" + 
        this.state.hideMarker  +  "="  +  this.state.center  + 
        "&size="  +  this.state.mapWidth  +  "x"  +  this.state.mapHeight + 
        "&maptype=" + this.state.mapType + 
        "&format=" + this.state.imageFormat + 
        "&zoom=15" + 
        "&scale=2" + 
        "&visual_refresh=true" + 
        "&key=" + apiKeyStatic;

        const embedMapSrc = "//www.google.com/maps/embed/v1/place?" + 
        "q=" + this.state.center + 
        "&key=" + apiKeyEmbed;

        const staticImageStyle = {
            position: "relative",
            margin: "0px auto",
            width: "100%",
            height: "100%",
            maxWidth: this.state.mapWidth + "px",
            maxHeight: this.state.mapHeight + "px",
            // paddingBottom: "56.25%", // set screen ratio to 16:9
        }

        return (
            <div id="embed_map_ntnu" style={staticImageStyle}
            data-iframe-src={embedMapSrc}
            data-iframe-width={this.state.mapWidth} 
            data-iframe-height={this.state.mapHeight}>
                <img src={staticImageSrc} style={staticImageStyle} onClick={this.openEmbedMap}></img>
            </div>
        );
    }
}