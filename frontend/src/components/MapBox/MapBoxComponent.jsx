import React, { useState } from "react";
import './MapBoxComponent.css';
import mapboxgl from 'mapbox-gl';
import {Map, Marker} from 'react-map-gl';
import secret from "../../secret"
const MapBoxComponent = () => {
    mapboxgl.accessToken = secret.MAPBOX_TOKEN;
    // //const [setStyles] = useState();
    // const setStyles = ({
    //     style: "streets-v12"
    // })
    return (
        <div className="mapBoxComponent">
            <div className="map-container" >
                <Map
                    initialViewState={{
                        longitude: -0.604441,
                        latitude: 38.810384,
                        zoom: 15
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                >
                    <Marker longitude={-0.604441} latitude={38.810384} anchor={"bottom"} color={"blue"} />
                </Map>
            </div>
        </div>
    )

};

export default MapBoxComponent