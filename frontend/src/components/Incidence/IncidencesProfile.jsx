import React, { useEffect, useState } from "react";
import {MdSend} from "react-icons/md"
import { JWTGetToken } from "../../services/JWTService";
import { useIncidence } from "../../hooks/useIncidence";
import jwt_decode from "jwt-decode"

const IncidenceProfile = () => {
    const {getIncidencesProfile} = useIncidence()
    const id = jwt_decode(JWTGetToken())
    getIncidencesProfile(id.id)
    // useEffect(() => {
    // }, [getIncidencesProfile()])
    return (
        <div className="m-5 text-center">
            <h1 className="text-primary">Your Incidences</h1><p></p>
            
        </div>
    )
}

export default IncidenceProfile;