import React, { useState } from "react";
import './MapBoxComponent.css';
import mapboxgl from 'mapbox-gl';
import {Map, Marker, Popup} from 'react-map-gl';
import secret from "../../secret"
const MapBoxComponent = (props) => {
    mapboxgl.accessToken = secret.MAPBOX_TOKEN;
    const [show, setShow] = useState(false)
    return (
        <div className="map-container" >
            <Map
                initialViewState={{
                    longitude: props.data.long,
                    latitude: props.data.lat,
                    zoom: 15
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                <Marker longitude={props.data.long} latitude={props.data.lat} anchor={"bottom"} color={"blue"} onClick={()=> setShow(true)}/>
                {(() => {
                    if (show) {
                        console.log(show);
                        return (
                            <Popup longitude={props.data.long} latitude={props.data.lat}>
                                Hello
                            </Popup>
                        )
                    }
                })()}
            </Map>
        </div>

    )

};

export default MapBoxComponent