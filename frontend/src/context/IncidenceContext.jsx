import React, { useEffect, useState } from "react";
import { JWTGetToken } from "../services/JWTService";
import IncidenceService from "../services/IncidenceService"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
const Context = React.createContext({})
export function IncidenceContextProvider({ children }) {
    const [incidenceProfile, setIncidenceProfile] = useState()
    const [incidence, setIncidence] = useState([]);
    
    const checkIncidence = async () => {
        IncidenceService.getIncidences()
        .then(({data}) => {
            setIncidence(data)
            console.log(data)
        })
    }
    
    const checkIncidenceContext = async () => {
        const id = jwt_decode(JWTGetToken())
        console.log(id.id)
        IncidenceService.getIncidencesProfile(id.id)
            .then(({ data }) => {
                console.log(data)
                setIncidenceProfile(data)
            })
            .catch((error) => {
                console.log(error)
            })    
    }
    return (
        <Context.Provider value={{ incidenceProfile, setIncidenceProfile, checkIncidenceContext, incidence, setIncidence, checkIncidence}}>{children}</Context.Provider>
    );
}
export default Context