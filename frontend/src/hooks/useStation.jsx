import { useEffect, useCallback, useState } from "react";
import StationService from "../services/StationService";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

export function useStation() {
    const navigate = useNavigate();
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

    const updateStation = useCallback((data, id) => {
        StationService.putStation(data, id)
        .then(({data}) => {
            toast.success('🚲 Updated Station!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            navigate('/dashboard')
        })
    }, [])

    const deleteStation = useCallback((id) => {
        StationService.deleteStation(id)
        .then(({data}) => {
            toast.warn('🚲 Deleted Station!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            navigate('/dashboard')
        })
    }, [])

    return {
        station: station, createStation, deleteStation, updateStation
    }
}