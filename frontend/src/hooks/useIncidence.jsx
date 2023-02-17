import { useEffect, useState, useCallback } from "react";
import IncidenceService from "../services/IncidenceService";

export function useIncidence() {
    const [incidence, setIncidence] = useState();
    useEffect(function () {
        IncidenceService.getIncidences()
        .then(({data}) => {
            setIncidence(data)
        })
    }, [setIncidence])

    const putAnswer = useCallback((data,id) => {
        IncidenceService.putAnswerAdmin(data,id)
        .then(({data}) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })

    })

    return {
        incidence: incidence, putAnswer
    }
}