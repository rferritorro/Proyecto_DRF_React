import { useEffect, useCallback, useState } from "react";
import StationService from "../services/StationService";

export function useStation() {
    const [station, setStation] = useState();
    useEffect(function () {
        StationService.getStation()
        .then(({data}) => {
            setStation(data)
        })
    }, [setStation])

    const createStation = useCallback((data) => {
        StationService.addStation(data)
        .then(({data}) => {
            console.log(data)
        })
    }, [])

    return {
        station: station, createStation
    }
}