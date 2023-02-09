import React, { useState } from "react";
import Header from '../components/Header/HeaderComponent'
import {useAuth} from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { JWTGetToken, JWTRemoveToken } from "../services/JWTService";
const HeaderPage = () =>{
    const [token_logout, setLog] = useState();
    const token = JWTGetToken()
    const {user} = useAuth();
    const {userlogout} = useAuth();
    const navigate = useNavigate()
    const isLogin = () => {
        setLog(false)
        navigate('/login')
    }
    const isLogout = () => {
        setLog(true)
        userlogout()
    }
    return (
        <Header isToken={token} isLogout={isLogout} token_logout={token_logout} isLogin={isLogin}/>
    )
};

export default HeaderPage;
