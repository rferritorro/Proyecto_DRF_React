import React, { useState,useEffect } from "react";
import "./Modal.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {  toast } from 'react-toastify';
import { useStation } from "../../hooks/useStation";
import { useSlot } from "../../hooks/useSlot";
import { useRenting } from "../../hooks/useRenting";
import { GiDutchBike } from "react-icons/gi"
import { FaChargingStation } from "react-icons/fa"


const ModalComponent = (props) => {
    const {deleteStation} = useStation();
    const navigate = useNavigate();
    const [token_bike, Settoken_bike] = useState()
    const [SaveBikeId,setSaveBikeId] = useState()
    const [SaveSlotId,setSaveSlotId] = useState()
    const {GetSlotsByStation, slotsbystation} = useSlot();
    const {SetRenting,LeavingBike} = useRenting();

    const delStation = (data) => {
        deleteStation(data)
        toast.warn('🚲 Deleted Station!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        navigate('/dashboard')
    }
    useEffect(() => {
        Settoken_bike(localStorage.getItem('token_bike'))
    },[localStorage.getItem('token_bike')])
    const RentBike = (slot) => {
        if (!token_bike) {
            if (slot.bike_id == 0) {
                toast.error('🚲 Bike has already been reserved', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
                return null
            }
            setSaveBikeId(slot.bike_id)
            setSaveSlotId(slot.id)

        } else {
            if (slot.bike_id != 0) {
                toast.error('🚲 Slot is ocuped', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
                return null
            }
            setSaveSlotId(slot.id)
        }
        const bikes = document.querySelectorAll('.border-danger')
        if (bikes) {
            bikes.forEach((element) => {
                element.classList.add('border-white')
                element.classList.remove('border-danger')
            })
        }
        const bike = document.getElementById('slot-'+slot.id)
        bike.classList.add('border-danger')
        bike.classList.remove('border-white')
    }
    
    const LeaveBike = (bike_token) => {
        LeavingBike(
            {
                "slot_id": SaveSlotId,
                "token_bike":bike_token
            }
        )
    }
    const RentingBike = (station_id) => {
        // console.log(SaveBikeId,SaveSlotId,station_id)
        const date =new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay()
        const data = {
            "user_id": localStorage.getItem('token'),
            "station_id": station_id,
            "slot_id": SaveSlotId,
            "bike_id": SaveBikeId,
            "date": date
        }
        SetRenting(data)
    }
    useEffect(() => {
        GetSlotsByStation(props.info?.id)
    }, [props.info?.id])

    if (!props.show) {
        return null
    }
    let bkng;
    let del;
    if (!props.info) {
        bkng =  
        <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <img className="imglogo" src="logo_biosbike.png" />
        </Modal>  
    }
    if (props.admin) {
        del = <Button variant="danger" onClick={() => delStation(props.info?.id)}>
                    Delete
            </Button> 
    }
    if (props.info) {
        bkng = <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.info?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex">
                <img className="w-50" src={props.info.img}/>
                <div className="d-flex flex-wrap w-50 h-50">
                    {
                        slotsbystation
                        ?
                        slotsbystation.map((slot) =>
                            token_bike
                            ?
                            <div id={`slot-${slot.id}`} className={`w-50 p-2 border border-3 border-white ${slot.bike_id == 0 ? "bg-success" : "bg-danger"}`} onClick={() => RentBike(slot)}>
                                <FaChargingStation style={{ fontSize: "30px",color: "white" }} />
                            </div>
                            :
                            <div id={`slot-${slot.id}`} className={`w-50 p-2 border border-3 border-white ${slot.bike_id != 0 ? "bg-success" : "bg-danger"}`} onClick={() => RentBike(slot)}>
                                <GiDutchBike style={{ fontSize: "30px",color: "white" }} />
                            </div>
                    )
                    :
                    null
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                {del}
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                {
                    token_bike
                    ?
                    <Button variant="danger" onClick={() => LeaveBike(token_bike)}>
                        Leave Bike
                    </Button>  
                    :
                    <Button variant="primary" onClick={() => RentingBike(props.info?.id)}>
                        Rent Bike
                    </Button>
                }
            </Modal.Footer>
        </Modal>  
    }
    return (bkng)
    
}

export default ModalComponent