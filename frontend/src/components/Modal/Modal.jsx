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