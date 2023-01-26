import React from "react";
import './StationsComponent.css'
import MapBox from "../MapBox/MapBoxComponent"
const stations = [
    {
        "id": "1",
        "name": "Almaig",
        "slots": "10",
        "lat": "38.8186143",
        "long": "-0.6042993"
    },
    {
        "id": "2",
        "name": "San Rafael",
        "slots": "12",
        "lat": "38.8208413",
        "long": "-0.6086483"
    },
    {
        "id": "3",
        "name": "San Jose",
        "slots": "25",
        "lat": "38.824308",
        "long": "-0.6039427"
    },

]
const StationComponent = () => {
    return (
        <div className="stationComponent">
            <h1>STATIONS</h1>
            <div className="stationsDiv">
                {stations.map((data, index)  => (
                    <div className="stationsDivMap">
                        <MapBox data={data}/>
                        <h2 className="stationDescr" key={index} >STATION: {data.id}</h2>
                        <p className="stationDescr">{data.name}</p>
                        <p className="stationDescr">Slots: {data.slots}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default StationComponent