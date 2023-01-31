import React from "react";
import "./Modal.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ModalComponent = (props) => {
    if (!props.show) {
        return null
    }
    let bkng;
    if (!props.info) {
        bkng =  
        <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <img className="imglogo" src="logo_biosbike.png" />
        </Modal>  
    }
    if (props.info) {
        bkng = <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>STATION {props.info?.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.info?.name}</p>
                <p>Slots: {props.info?.bikes}</p>
                <img src="https://lh5.googleusercontent.com/p/AF1QipMgSoB8onS6A3ozE2-2TJJml8467gY-349HZjX6=w408-h306-k-no"/>
            </Modal.Body>
            <Modal.Footer>
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