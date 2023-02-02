import React, { useState } from "react";
import './MapBoxComponent.css';
import mapboxgl from 'mapbox-gl';
import {Map, Marker} from 'react-map-gl';
import secret from "../../secret"
//import Button from 'react-bootstrap/Button';
import Modal from '../../components/Modal/Modal'
//import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



const MapBoxComponent = (props) => {
    mapboxgl.accessToken = secret.MAPBOX_TOKEN;
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState();
    let marker_red;
    let map_complet;
    const [coordinate, setCoordinate] = useState();
        const clickMap = (event) => {
            props.lat(event.lngLat)
            setCoordinate(event.lngLat)              
        }
    if (coordinate) {
        marker_red = <Marker longitude={coordinate?.lng} latitude={coordinate?.lat} anchor={"bottom"} color={"red"}/>
    }
    
    console.log(props)
    map_complet = 
        <div className="map-container" >
            <Map
                initialViewState={{
                    longitude: -0.6052881,
                    latitude: 38.8234127,
                    zoom: 13
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                onClick={clickMap}
            >
                {props.data?.map((data, index) => (
                    <Marker longitude={data.long} latitude={data.lat} anchor={"bottom"} color={"blue"} onClick={() => { setShow(1); setInfo(data); handleShow() }} />
                ))}
                <Modal onClose={() => setShow(false)} show={show} info={info} admin={props?.admin}></Modal>
                {marker_red}
                {/* <Modal onClose={() => setShow(false)} show={show} info={info}/> */}
            </Map>
        </div>;

    console.log(coordinate)
    const handleShow = () => setShow(true);
    return (map_complet)

};

export default MapBoxComponent