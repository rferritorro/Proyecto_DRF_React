import React, { useState } from "react";
import {MdSend} from "react-icons/md"
import { JWTGetToken } from "../../services/JWTService";
import { useIncidence } from "../../hooks/useIncidence";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"

const IncidenceCreateComponent = (props) => {
    const [valueIncidence, setIncidence] = useState()
    const {createIncidence} = useIncidence()
    const id = jwt_decode(JWTGetToken())
    const formIncidence = {
        "user_id": id.id,
        "description": valueIncidence,
        "answer": null,
        "state": "0"
    }
    return (
        <div className="m-5 text-center">
            <h3 className="text-primary"><u>Do you have any problem?</u></h3><p></p>
            <p className="text-primary">Add your incidence</p>
            <textarea onKeyUp={event => setIncidence(event.target.value)} rows="8" cols="50" /><p></p>
            <MdSend onClick={() => createIncidence(formIncidence)} style={{ fontSize: "60px" }} className="text-primary btn btn-link"/><p></p>
            <Link to={"/profile/incidences"}>
                <Button variant="primary" className="m-3" onClick={() => props.checkIncidence()}>
                    Your Incidences
                </Button>
            </Link>
        </div>
    )
}

export default IncidenceCreateComponent;