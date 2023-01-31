import React, { useState } from "react";
import './StationsComponent.css'
import MapBox from "../MapBox/MapBoxComponent"
import { useStation } from "../../hooks/useStation";


const StationComponent = () => {
    const stations = useStation();
    console.log(stations.station)
    return (
        <div className="stationComponent">
            <h1>STATIONS</h1>
            <MapBox data={stations?.station}/>
            {/* <div className="stationsDiv">
                {stations.station?.map((data, index)  => (
                    <div className="stationsDivMap">
                        <MapBox data={data}/>
                        <h2 className="stationDescr" key={index} >STATION: {data.id}</h2>
                        <p className="stationDescr">{data.name}</p>
                        <p className="stationDescr">Slots: {data.bikes}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
};

export default StationComponent