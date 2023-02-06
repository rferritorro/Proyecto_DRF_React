import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Stations/StationsComponent.css'
import MapBox from "../../MapBox/MapBoxComponent"
import { useStation } from "../../../hooks/useStation";
import Button from 'react-bootstrap/Button';

import {  toast } from 'react-toastify';

const CreateStation = () => {
    const stations = useStation();
    const [add, setAdd] = useState();
    const [isAdmin] = useState(true);
    const [name, setName] = useState()
    const [url, setUrl] = useState()
    const {createStation} = useStation();
    const navigate = useNavigate();
    console.log(stations.station)
    const lat = (value) => {
        setAdd(value)
    }
    const data = {
        "name": name,
        "long": add?.lng,
        "lat": add?.lat,
        "img": url,
    }
    const submit = () => {
        createStation(data)
        toast('🚲 New Station!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        navigate('/dashboard')
    }
   
    return (
        <div className="m-3 stationComponent">
            <h1 className="text-center">ADD STATION</h1>
            <strong>NAME OF STATION: </strong>
            <input type={"text"} id="name" onChange={event => setName(event.target.value)}/><p></p>
            <strong>IMAGE OF STATION: </strong>
            <input type={"url"} id="img" onChange={event => setUrl(event.target.value)}/><p></p>
            <strong>*SPECIFY IN THE MAP DIRECTION OF NEW STATION*</strong><p></p>
            <input type={"text"} value={add?.lng}/>&nbsp;
            <input type={"text"} value={add?.lat}/><p></p>
            <input type={"button"}  value={"Add"} onClick={submit}/>
            <MapBox data={stations?.station} lat={lat} admin={isAdmin}/>
            
        </div>
    )
}

export default CreateStation