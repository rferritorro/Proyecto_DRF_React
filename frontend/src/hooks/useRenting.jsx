import { useEffect, useCallback, useState, useContext } from "react";
import {  toast } from 'react-toastify';
import RentingService from "../services/RentingService";
import { useNavigate } from "react-router-dom";
import { useNotification } from "./useNotifications";

export function useRenting() {
    const navigate = useNavigate()
    const {createNotification} = useNotification()
    const SetRenting = useCallback((data) => {
        RentingService.setRenting(data)
        .then(({data}) => {
            console.log(data)
            if (data) {
                localStorage.setItem('token_bike',data.bike_token)
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
                const form = {
                    "type": 0,
                    "body": "Acabas de alquilar una bici en " + data.station_id.name,
                    "incidence_id": "",
                    "rent_id": data.id,
                    "date": new Date().getFullYear()+"-"+[new Date().getMonth()+1]+"-"+new Date().getDate()+" "+new Date().getHours()+ ":"+new Date().getUTCMinutes()+ ":"+ new Date().getSeconds()
                }
                createNotification(form, data.user_id)
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
            console.log(data)
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
                const form = {
                    "type": -1,
                    "body": "Acabas de dejar una bici en " + data[0].station_id,
                    "incidence_id": "",
                    "rent_id": "",
                    "date": new Date().getFullYear()+"-"+[new Date().getMonth()+1]+"-"+new Date().getDate()+" "+new Date().getHours()+ ":"+new Date().getUTCMinutes()+ ":"+ new Date().getSeconds()
                }
                createNotification(form, data[1])
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