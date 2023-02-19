import { useEffect, useState, useCallback } from "react";
import IncidenceService from "../services/IncidenceService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export function useIncidence() {
    const [incidence, setIncidence] = useState();
    const navigate = useNavigate()
    useEffect(function () {
        IncidenceService.getIncidences()
        .then(({data}) => {
            setIncidence(data)
            console.log(data)
        })
    }, [setIncidence])

    const getIncidencesProfile = useCallback((id) => {
        IncidenceService.getIncidencesProfile(id)
        .then(({data}) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    })

    const createIncidence = useCallback((data) => {
        IncidenceService.createIncidence(data)
        .then(({data}) => {
            console.log(data)
            toast.success('🚲 Incidence created!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
        .catch((error) => {
            console.log(error)
        })
    })

    const putAnswer = useCallback((data,id) => {
        IncidenceService.putAnswerAdmin(data,id)
        .then(({data}) => {
            console.log(data)
            toast.success('🚲 Incidence responsed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate("/dashboard")
        })
        .catch((error) => {
            console.log(error)
        })

    })

    return {
        incidence: incidence, putAnswer, createIncidence, getIncidencesProfile
    }
}