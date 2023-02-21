import React, { useContext, useState } from "react";
import Header from '../components/Header/HeaderComponent'
import {useAuth} from "../hooks/useAuth";
import {useNotification} from "../hooks/useNotifications";
import UserContext from "../context/UserContext"
import NotificationContext from "../context/NotificationContext"
import { useNavigate } from "react-router-dom";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
const HeaderPage = () =>{
    const [token_logout, setLog] = useState();
    const [dashPage, setdashPage] = useState(false);
    const token = JWTGetToken()
    const { users, Admin } = useContext(UserContext);
    const {notification, checkNotificationContext} = useContext(NotificationContext)
    const {userlogout, checkToken} = useAuth();
    setTimeout(() => {
        checkToken()
    }, 500);
    const navigate = useNavigate();
    console.log(notification)
    const isLogin = () => {
        setLog(false)
        navigate('/login')
    }
    const isLogout = () => {
        setLog(true)
        userlogout()
    }
    const dashboardPage = (value) => {
        setdashPage(value)
    }
    return (
        <Header isToken={token} isLogout={isLogout} token_logout={token_logout} 
            isLogin={isLogin} isAdmin={Admin} userData={users} dashboardPage={dashboardPage} dashPage={dashPage} notification={notification}
            checkNotificationContext={checkNotificationContext}/>
    )
};

export default HeaderPage;
