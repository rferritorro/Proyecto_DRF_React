import React, { useState } from "react";
import "./Modal.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useStation } from "../../hooks/useStation";

const ModalComponent = (props) => {
    const [nameStation, setnameStation] = useState()
    const [img, setImg] = useState()
    const [long, setLong] = useState()
    const [lat, setLat] = useState()
    const formUpdate = {
        "name": nameStation ? nameStation: props.info?.name,
        "img": img ? img : props.info?.img,
        "long": long ? long : props.info?.long,
        "lat": lat ? lat : props.info?.lat
    }
    const {deleteStation, updateStation} = useStation();
    if (!props.show) {
        return null
    }
    let bkng;
    let del;
    let update_name;
    let update;
    if (!props.info) {
        bkng =  
        <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <img className="imglogo" src="logo_biosbike.png" />
        </Modal>  
    }
    if (props.admin) {
        del =   <Button variant="danger" onClick={() => deleteStation(props.info?.id)}>
                    Delete
                </Button>
        update_name = <input type={"text"} onKeyUp={event => setnameStation(event.target.value)} className="m-2 bg-transparent border-0" defaultValue={formUpdate.name}/>
        update = <p>
                    <p>
                        <strong>Img:</strong>
                        <input type={"text"} onKeyUp={event => setImg(event.target.value)} className="m-2 bg-transparent border-0" defaultValue={formUpdate.img}/>
                    </p>
                    <strong>Long:</strong>
                    <input type={"text"} onKeyUp={event => setLong(event.target.value)} className="m-2 bg-transparent border-0" defaultValue={formUpdate.long}/>
                    <strong>Lat:</strong>
                    <input type={"text"} onKeyUp={event => setLat(event.target.value)} className="m-2 bg-transparent border-0" defaultValue={formUpdate.lat}/>
                    <p></p>
                    <Button variant="primary" onClick={() => updateStation(formUpdate, props.info?.id)}>
                        Update
                    </Button>
                </p>
       
    }
    if (!props.admin) {
        update_name = <strong>{formUpdate.name}</strong>
    }
    console.log(props)
    if (props.info) {
        bkng = <Modal show={props.show} onHide={props.onClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>{update_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="w-75" src={formUpdate.img}/>
                {update}
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