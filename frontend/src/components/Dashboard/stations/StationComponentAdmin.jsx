import React, { useState } from "react";
import '../../Stations/StationsComponent.css'
import MapBox from "../../MapBox/MapBoxComponent"
import { useStation } from "../../../hooks/useStation";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import CreateStation from "../../Dashboard/stations/CreateStation";

const StationComponent = () => {
    // const stations = useStation();
    // const [newStation, setnewStation] = useState();
    // const [add, setAdd] = useState();
    // const [isAdmin, setisAdmin] = useState(true);
    // const navigate = useNavigate();
    // const AddStation = () => {
    //     setnewStation(true);
    // }
    // const lat = (value) => {
    //     setAdd(value)
    // }
    return (
        <div className="stationComponent">
            <h1 className="text-center">STATIONS</h1>
            <Link to={"/dashboard/add_station"} className="nav-link">
                <Button variant="primary" className="m-3">
                        Add New station
                </Button><p></p>
            </Link>
            {/* <CreateStation newStation={newStation} add={add}/>
            <MapBox data={stations?.station} newStation={newStation} lat={lat} admin={isAdmin}/> */}
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