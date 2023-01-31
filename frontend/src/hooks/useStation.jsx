import { useEffect, useState } from "react";
import StationService from "../services/StationService";

export function useStation() {
    const [station, setStation] = useState();
    useEffect(function () {
        StationService.getStation()
        .then(({data}) => {
            setStation(data)
        })
    }, [setStation])

    return {
        station: station
    }
}