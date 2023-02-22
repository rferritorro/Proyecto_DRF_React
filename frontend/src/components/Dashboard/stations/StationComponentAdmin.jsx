import React, { useState, Suspense } from "react";
import {useNavigate} from "react-router-dom"
import "../dashboard.css"
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {MdDelete} from 'react-icons/md'
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import { useStation } from "../../../hooks/useStation";
import {useSlot} from "../../../hooks/useSlot"
import {  toast } from 'react-toastify';
import PaginationComponent from "../../Pagination/PaginationComponent";

const StationComponent = (props) => {
    const stations = useStation();
    const {deleteStation} = useStation();
    const {slots} = useSlot()
    const [actualPage, setActualPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [stations_filtered1, setFilter1] = useState(0)
    const [stations_filtered2, setFilter2] = useState(3)
    console.log(slots)
    const paginates = (number) => {
        setActualPage(number)
        console.log(actualPage)
        switch (number) {
            case 1:
                setFilter1(0)
                setFilter2(3)
                break;
            case 2:
                setFilter1(3)
                setFilter2(6)
                break;
            case 3:
                setFilter1(6)
                setFilter2(9)
                break;
        }
    }
    return (
        <div className="stationComponentAdmin m-5">
            <h3 className="text-center text-primary"><u>STATIONS</u></h3>
            <Link to={"/dashboard/add_station"} className="nav-link">
                <Button variant="primary" className="m-3">
                        Add New station
                </Button><p></p>
            </Link>
            <div className="stationsDiv">
                {stations.station?.slice(stations_filtered1, stations_filtered2).map((data, index)  => (
                        <div className="stationsDivMap">
                            <div className="position-absolute">
                                {
                                    slots?.map((data2, index2) => (
                                        data2.station_id.id === data.id && !data2.state ?
                                        <BsFillExclamationTriangleFill title={`Slot averiado`} className={"text-warning"} style={{fontSize: "40px"}}/>:
                                        <p></p>                        
                                        ))
                                }
                            </div>
                                <h2 className="stationDescr" key={index} >STATION: {data.id}</h2>
                                <p className="stationDescr">{data.name}</p>
                                <p className="stationDescr">Slots: {data.bikes}</p>
                                <img className="w-75 m-4" src={data.img}/>
                        </div>
                ))}
            </div>
            <div>
                <PaginationComponent total={stations.station?.length} stations={stations.station?.slice(stations_filtered1, stations_filtered2)} pages={postsPerPage} paginates={paginates}/>        
            </div>
        </div>
    )
};

export default StationComponent