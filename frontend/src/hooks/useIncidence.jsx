import { useEffect, useState, useCallback, useContext } from "react";
import IncidenceService from "../services/IncidenceService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import IncidenceContext from "../context/IncidenceContext"
import { useNotification } from "./useNotifications";
export function useIncidence() {
    const { checkIncidence} = useContext(IncidenceContext)
    const {createNotification} = useNotification()
    const [incidence, setIncidence] = useState()
    const navigate = useNavigate()
    useEffect(function () {
        IncidenceService.getIncidences()
        .then(({data}) => {
            setIncidence(data)
            console.log(data)
        })
    }, [setIncidence])

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
            const form = {
                "type": 2,
                "body": "Acabas de crear una incidencia",
                "incidence_id": data.id,
                "rent_id": "",
                "date": new Date().getFullYear()+"-"+[new Date().getMonth()+1]+"-"+new Date().getDate()+" "+new Date().getHours()+ ":"+new Date().getUTCMinutes()+ ":"+ new Date().getSeconds()
            }
            createNotification(form, data.user_id)
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
            const form = {
                "type": 1,
                "body": "Tu incidencia ha sido gestionada",
                "incidence_id": data.id,
                "rent_id": "",
                "date": new Date().getFullYear()+"-"+[new Date().getMonth()+1]+"-"+new Date().getDate()+" "+new Date().getHours()+ ":"+new Date().getUTCMinutes()+ ":"+ new Date().getSeconds()
            }
            createNotification(form, data.user_id)
            checkIncidence()
        })
        .catch((error) => {
            console.log(error)
        })
    })

    const deleteIncidence = useCallback((id) => {
        IncidenceService.deleteIncidence(id)
        .then(({data}) => {
            console.log(data)
            toast.success('🚲 Incidence deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            checkIncidence()
            // IncidenceService.getIncidences()
            // .then(({data}) => {
            //     setIncidence(data)
            //     console.log(data)
            // })
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return {
        incidence: incidence, putAnswer, createIncidence, deleteIncidence
    }
}