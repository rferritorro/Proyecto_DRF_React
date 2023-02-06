import React from "react";
import "./Modal.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {  toast } from 'react-toastify';
import { useStation } from "../../hooks/useStation";

const ModalComponent = (props) => {
    const {deleteStation} = useStation();
    const navigate = useNavigate();
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
    console.log(props)
    if (props.info) {
        bkng = <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>STATION {props.info?.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <strong>
                    {props.info?.name}
                    </strong>
                </p>
                <p>Slots: {props.info?.bikes}</p>
                <img className="w-75" src={props.info.img}/>
            </Modal.Body>
            <Modal.Footer>
                {del}
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onClose}>
                    Rent a Bike
                </Button>
            </Modal.Footer>
        </Modal>  
    }
    return (bkng)

}

export default ModalComponent