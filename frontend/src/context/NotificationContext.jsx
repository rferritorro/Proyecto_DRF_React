import React, { useEffect, useState } from "react";
import { JWTGetToken } from "../services/JWTService";
import NotificationService from "../services/NotificationService"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
const Context = React.createContext({})
export function NotificationContextProvider({ children }) {
    const [notification, setNotification] = useState([]);
    
    const checkNotificationContext = async (id) => {
        //const id = jwt_decode(JWTGetToken())
        NotificationService.NotificationsUser(id)
            .then(({ data }) => {
                setNotification(data)
            })

    }
    return (
        <Context.Provider value={{ checkNotificationContext, notification, setNotification}}>{children}</Context.Provider>
    );
}
export default Context