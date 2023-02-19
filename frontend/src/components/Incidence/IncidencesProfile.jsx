import React, { useEffect, useState } from "react";
import {MdSend} from "react-icons/md"
import { JWTGetToken } from "../../services/JWTService";
import { useIncidence } from "../../hooks/useIncidence";

const IncidenceProfile = () => {
    const {getIncidencesProfile} = useIncidence()
    getIncidencesProfile(JWTGetToken()?.split("id_")[1])
    // useEffect(() => {
    // }, [getIncidencesProfile()])
    return (
        <div className="m-5 text-center">
            <h1 className="text-primary">Your Incidences</h1><p></p>
            
        </div>
    )
}

export default IncidenceProfile;