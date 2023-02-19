import React, { useState } from "react";
import {MdSend} from "react-icons/md"
import { JWTGetToken } from "../../services/JWTService";
import { useIncidence } from "../../hooks/useIncidence";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const IncidenceCreateComponent = () => {
    const [valueIncidence, setIncidence] = useState()
    const {createIncidence} = useIncidence()
    const formIncidence = {
        "user_id": JWTGetToken()?.split("id_")[1],
        "description": valueIncidence,
        "answer": "",
        "state": "0"
    }
    return (
        <div className="m-5 text-center">
            <h3 className="text-primary"><u>Do you have any problem?</u></h3><p></p>
            <p className="text-primary">Add your incidence</p>
            <textarea onKeyUp={event => setIncidence(event.target.value)} rows="8" cols="50" /><p></p>
            <MdSend onClick={() => createIncidence(formIncidence)} style={{ fontSize: "60px" }} className="text-primary btn btn-link"/><p></p>
            <Link to={"/profile/incidences"}>
                <Button variant="primary" className="m-3">
                    Your Incidences
                </Button>
            </Link>
        </div>
    )
}

export default IncidenceCreateComponent;