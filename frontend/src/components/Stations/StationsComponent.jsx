import React from "react";
import './StationsComponent.css'
import MapBox from "../MapBox/MapBoxComponent"
import { useStation } from "../../hooks/useStation";

const StationComponent = () => {
    const stations = useStation();
    return (
        <div className="stationComponent">
            <h1 className="text-center">STATIONS</h1>
            <MapBox data={stations?.station}/>
        </div>
    )
};

export default StationComponent