import React, { useState } from "react";
import './StationsComponent.css'
import MapBox from "../MapBox/MapBoxComponent"
import { useStation } from "../../hooks/useStation";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import CreateStation from "../Dashboard/CreateStation";

const StationComponent = () => {
    const stations = useStation();
    const [newStation, setnewStation] = useState();
    const [add, setAdd] = useState();
    const navigate = useNavigate();
    const AddStation = () => {
        setnewStation(true);
    }
    const lat = (value) => {
        setAdd(value)
    }
    return (
        <div className="stationComponent">
            <h1 className="text-center">STATIONS</h1>
            <Button variant="primary" className="m-3" onClick={AddStation}>
                    Add New station
            </Button><p></p>
            <CreateStation newStation={newStation} add={add} data={stations?.station}/>
            <MapBox data={stations?.station} newStation={newStation} lat={lat}/>
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