import React from "react";
import './StationsComponent.css'
import MapBox from "../MapBox/MapBoxComponent"
const stations = [
    "1",
    "2",
    "3"
]
const StationComponent = () => {
    return (
        <div className="stationComponent">
            <h1>STATIONS</h1>
            <div className="stationsDiv">
                {stations.map(() => (
                    <MapBox />
                ))}
            </div>
        </div>
    )
};

export default StationComponent