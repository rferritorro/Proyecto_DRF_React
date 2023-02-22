import { useEffect, useCallback, useState } from "react";
import { JWTGetToken } from "../services/JWTService";
import NotificationService  from "../services/NotificationService";
import jwt_decode from "jwt-decode"
import { toast } from "react-toastify";

export function useNotification() {
    const [notification, setNotification] = useState([]);
    useEffect(function () {
        if (JWTGetToken()) {
            const id = jwt_decode(JWTGetToken())
            NotificationService.NotificationsUser(id.id)
            .then(({data}) => {
                setNotification(data)
            })
        }
    }, [setNotification])

    const createNotification = useCallback((data, id) => {
        NotificationService.addNotification(data, id)
        .then(({data}) => {
            console.log(data)
            if (data.type != 1) {
                setTimeout(() => {
                    toast.success('🔔 You have a new notification!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }, 1000);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return {
        notification: notification, createNotification
    }                             
}