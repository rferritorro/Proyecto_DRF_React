import { useEffect, useCallback, useState, useContext } from "react";
import {  toast } from 'react-toastify';
import RentingService from "../services/RentingService";
import { useNavigate } from "react-router-dom";

export function useRenting() {
    const navigate = useNavigate()
    const SetRenting = useCallback((data) => {
        RentingService.setRenting(data)
        .then(({data}) => {
            if (data) {
                localStorage.setItem('token_bike',data)
                toast.success('🚲 You can ride now', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
                setTimeout(() => {
                    navigate("/history")
                }, 200);
            }
        }).catch((error) => {
            toast.error('🚲 Bike unavailable', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [])
    const LeavingBike = useCallback((data) => {
        RentingService.LeaveRenting(data)
        .then(({data}) => {
            if (data) {
                localStorage.removeItem('token_bike')
                toast.success('🚲 Thanks for use us', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
                setTimeout(() => {
                    setTimeout(() => {
                        navigate("/history")
                    }, 200);
                }, 200);
                
            }
        }).catch((error) => {
            toast.error('Error has been ocurred', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
    }, [])
    return {
        SetRenting,LeavingBike
    }
}